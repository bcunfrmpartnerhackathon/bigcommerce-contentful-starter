import { ComponentProps, Slot } from '@uniformdev/upm-react';

export function Visualizer({ component, ...otherProps }: ComponentProps) {
  return (
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
      <p>
        <strong>Slots</strong>
      </p>
      {Object.keys(component.slots ?? {}).map((key) => (
        <div key={key} style={{ border: '2px dashed gray', padding: '1rem' }}>
          <p>
            <strong>{key}</strong>
          </p>
          <Slot name={key} />
        </div>
      ))}
    </fieldset>
  );
}
