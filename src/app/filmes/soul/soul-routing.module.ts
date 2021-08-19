import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoulPage } from './soul.page';

const routes: Routes = [
  {
    path: '',
    component: SoulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoulPageRoutingModule {}
