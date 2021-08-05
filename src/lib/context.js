import React, { createContext, useContext, useEffect, useState } from 'react';
import { Base64 } from 'base64-string';

const checkoutID = 'checkout_id';

// Set our initial context states
const initialContext = {
  meganav: {
    isOpen: false,
    activeID: null,
  },
  productCounts: [],
  // TODO
  bcClient: {
    checkout: {
      addLineItems: () => {
        console.log('addLineItems');
      },
      create: () => {
        console.log('create');
      },
      fetch: () => {
        console.log('fetch');
      },
    },
  },
  isLoading: false,
  isAdding: false,
  isUpdating: false,
  isCartOpen: false,
  checkout: {
    id: null,
    lineItems: [],
  },
};

// Set context
const SiteContext = createContext({
  context: initialContext,
  setContext: () => null,
});

// Build a new checkout
const createNewCheckout = (context) => {
  return context.bcClient?.checkout.create({
    presentmentCurrencyCode: 'USD',
  });
};

// Get checkout cart
const fetchCheckout = (context, id) => {
  return context.bcClient?.checkout.fetch(id);
};

// set our checkout states
const setCheckoutState = async (checkout, setContext, openCart) => {
  if (!checkout) return null;

  if (typeof window !== `undefined`) {
    localStorage.setItem(checkoutID, checkout.id);
  }

  // TODO get real lineItems data from a backend

  // update state
  setContext((prevState) => {
    return {
      ...prevState,
      isAdding: false,
      isLoading: false,
      isUpdating: false,
      isCartOpen: openCart ? true : prevState.isCartOpen,
      checkout: {
        id: checkout.id,
        lineItems: lineItems,
        subTotal: checkout.lineItemsSubtotalPrice,
        webUrl: checkout.webUrl,
      },
    };
  });
};

/*  ------------------------------ */
/*  Our Context Wrapper
/*  ------------------------------ */

const SiteContextProvider = ({ data, children }) => {
  const { productCounts } = data;

  const [context, setContext] = useState({
    ...initialContext,
    ...{ productCounts },
  });

  const [initContext, setInitContext] = useState(false);

  useEffect(() => {
    // checkout not build yet
    if (initContext === false) {
      const initializeCheckout = async () => {
        const existingCheckoutID = typeof window !== 'undefined' ? localStorage.getItem(checkoutID) : false;

        // existing checkout ID found
        if (existingCheckoutID) {
          try {
            // fetch checkout
            const existingCheckout = await fetchCheckout(context, existingCheckoutID);

            // Check if there are invalid items
            if (existingCheckout.lineItems.some((lineItem) => !lineItem.variant)) {
              throw new Error('Invalid item in checkout. This variant was probably deleted.');
            }

            // Make sure this cart hasn’t already been purchased.
            if (!existingCheckout.completedAt) {
              setCheckoutState(existingCheckout, setContext);
              return;
            }
          } catch (e) {
            localStorage.setItem(checkoutID, null);
          }
        }

        // Otherwise, create a new checkout!
        const newCheckout = await createNewCheckout(context);
        setCheckoutState(newCheckout, setContext);
      };

      // Initialize the store context
      initializeCheckout();
      setInitContext(true);
    }
  }, [initContext, context, setContext, context.bcClient?.checkout]);

  return (
    <SiteContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

// Access our global store states
function useSiteContext() {
  const { context } = useContext(SiteContext);
  return context;
}

// Toggle Mega Navigation states
function useToggleMegaNav() {
  const {
    context: { meganav },
    setContext,
  } = useContext(SiteContext);

  async function toggleMegaNav(state, id = null) {
    setContext((prevState) => {
      return {
        ...prevState,
        meganav: {
          isOpen: state === 'toggle' ? !meganav.isOpen : state,
          activeID: state === 'toggle' && meganav.isOpen ? null : id,
        },
      };
    });
  }
  return toggleMegaNav;
}

/*  ------------------------------ */
/*  Our Shopping context helpers
/*  ------------------------------ */

// Access our cart item count
function useCartCount() {
  const {
    context: { checkout },
  } = useContext(SiteContext);

  let count = 0;

  if (checkout.lineItems) {
    count = checkout.lineItems.reduce((total, item) => item.quantity + total, 0);
  }

  return count;
}

// Access our cart totals
function useCartTotals() {
  const {
    context: { checkout },
  } = useContext(SiteContext);

  const subTotal = checkout.subTotal ? checkout.subTotal.amount * 100 : false;
  return {
    subTotal,
  };
}

// Access our cart items
function useCartItems() {
  const {
    context: { checkout },
  } = useContext(SiteContext);

  return checkout.lineItems;
}

// Add an item to the checkout cart
function useAddItem() {
  const {
    context: { checkout, bcClient },
    setContext,
  } = useContext(SiteContext);

  async function addItem(variantID, quantity, attributes) {
    console.log('addItem', { variantID });
    // Bail if no ID or quantity given
    if (!variantID || !quantity) return;

    // Otherwise, start adding the product
    setContext((prevState) => {
      return { ...prevState, isAdding: true, isUpdating: true };
    });

    // build encoded variantID
    const enc = new Base64();
    const variant = enc.urlEncode(`${variantID}`);

    // Build the cart line item
    const newItem = {
      variantId: variant,
      quantity: quantity,
      customAttributes: attributes,
    };

    // Add it to the checkout cart
    const newCheckout = await bcClient.checkout.addLineItems(checkout.id, newItem);

    // Update our global store states
    setCheckoutState(newCheckout, setContext, true);
  }

  return addItem;
}

// Update item in cart
function useUpdateItem() {
  const {
    context: { checkout, bcClient },
    setContext,
  } = useContext(SiteContext);

  async function updateItem(itemID, quantity) {
    // Bail if no ID or quantity given
    if (!itemID || !quantity) return;

    // Otherwise, start adding the product
    setContext((prevState) => {
      return { ...prevState, isUpdating: true };
    });

    const newCheckout = await bcClient.checkout.updateLineItems(checkout.id, [
      { id: itemID, quantity: quantity },
    ]);

    setCheckoutState(newCheckout, setContext);
  }
  return updateItem;
}

// Remove item from cart
function useRemoveItem() {
  const {
    context: { checkout, bcClient },
    setContext,
  } = useContext(SiteContext);

  async function removeItem(itemID) {
    // Bail if no ID given
    if (!itemID) return;

    // Otherwise, start removing the product
    setContext((prevState) => {
      return { ...prevState, isUpdating: true };
    });

    const newCheckout = await bcClient.checkout.removeLineItems(checkout.id, [itemID]);

    setCheckoutState(newCheckout, setContext);
  }
  return removeItem;
}

// Build our Checkout URL
function useCheckout() {
  const {
    context: { checkout },
  } = useContext(SiteContext);

  return checkout.webUrl;
}

// Toggle cart state
function useToggleCart() {
  const {
    context: { isCartOpen },
    setContext,
  } = useContext(SiteContext);

  async function toggleCart() {
    setContext((prevState) => {
      return { ...prevState, isCartOpen: !isCartOpen };
    });
  }
  return toggleCart;
}

// Reference a collection product count
function useProductCount() {
  const {
    context: { productCounts },
  } = useContext(SiteContext);

  function productCount(collection) {
    if (!productCounts) {
      return 0;
    }
    const collectionItem = productCounts.find((c) => c.slug === collection);
    return collectionItem.count;
  }

  return productCount;
}

export {
  SiteContextProvider,
  useSiteContext,
  useToggleMegaNav,
  useCartCount,
  useCartTotals,
  useCartItems,
  useAddItem,
  useUpdateItem,
  useRemoveItem,
  useCheckout,
  useToggleCart,
  useProductCount,
};
