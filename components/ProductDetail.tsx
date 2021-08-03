import { ComponentProps, Slot } from '@uniformdev/upm-react';

export function ProductDetail({ component, ...otherProps }: ComponentProps) {
  return (
    <>
      <h1>Product Detail</h1>
      <fieldset>
        <legend>Component: {component.type}</legend>
        <p>
          <strong>Props</strong>
        </p>
        <ul>
          {Object.entries(otherProps ?? {}).map(([k, v]) => (
            <li key={k}>
              {k}: <pre>{JSON.stringify(v, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </fieldset>
    </>
  );
}
