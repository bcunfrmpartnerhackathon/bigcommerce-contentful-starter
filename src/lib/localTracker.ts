import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser';
import { DeliveryAPIResult } from '@uniformdev/optimize-common';
import intentManifest from './intentManifest.json';
import { createNextCookieStorage, createNextTestStorage } from './nextCookieStorage';
import { indexedDbScopeStorage } from '@uniformdev/optimize-tracker-storage-indexeddb';

export const createLocalTracker = () =>
  createDefaultTracker({
    intentManifest: intentManifest as DeliveryAPIResult,
    logLevelThreshold: 'info',
    storage: {
      scopes: indexedDbScopeStorage({
        scoringStorage: createNextCookieStorage(),
      }),
      tests: createNextTestStorage(),
    },
  });

  export const localTracker = createLocalTracker();