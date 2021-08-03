import { ComponentProps } from '@uniformdev/upm-react';

export function ProductCategories({ component, ...otherProps }: ComponentProps) {
  return (
    <>
      <h1>Product Categories component</h1>
      <fieldset>
        <legend>Component parameters</legend>
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
