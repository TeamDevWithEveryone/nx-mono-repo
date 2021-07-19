import { IEnvironment } from '@team-dev-monorepo/xplat/core';
import { deepMerge } from '@team-dev-monorepo/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
