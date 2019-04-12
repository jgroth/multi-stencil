import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'package-1',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
