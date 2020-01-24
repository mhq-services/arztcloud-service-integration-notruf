import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'arztcloud-service-integration-notruf',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
