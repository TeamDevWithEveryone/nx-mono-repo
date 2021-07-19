import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@team-dev-monorepo/xplat/web/features';

@Component({
  selector: 'team-dev-monorepo-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
