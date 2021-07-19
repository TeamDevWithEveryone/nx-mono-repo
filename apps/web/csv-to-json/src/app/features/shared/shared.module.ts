import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@team-dev-monorepo/xplat/web/features';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
