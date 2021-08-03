import { useRouter } from 'next/router';

export function PreviewSwitch() {
  const { asPath, push, isPreview } = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        const url = `/api/preview?slug=${asPath}${
          isPreview ? '&disable=1' : '&secret=replace-me-with-your-.env-secret'
        }`;

        push(url);
      }}
      style={{
        position: 'absolute',
        display: 'inline-block',
        bottom: '20px',
        left: '20px',
        background: 'rebeccapurple',
        color: 'white',
        border: '0',
        boxShadow: '0px 5px 20px 10px rebeccapurple',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      Turn preview {isPreview ? 'off' : 'on'}
    </button>
  );
}
