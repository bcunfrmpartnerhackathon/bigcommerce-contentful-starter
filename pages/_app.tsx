import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import { localTracker } from '../src/lib/localTracker';
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <UniformTracker trackerInstance={localTracker}>
      <Component {...pageProps} />
    </UniformTracker>
  );
}
