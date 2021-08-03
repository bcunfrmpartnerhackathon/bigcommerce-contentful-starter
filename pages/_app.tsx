import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import { localTracker } from '../src/lib/localTracker';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <UniformTracker trackerInstance={localTracker}>
      <Component {...pageProps} />
    </UniformTracker>
  );
}
