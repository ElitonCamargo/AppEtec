import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterPage } from './monster.page';

const routes: Routes = [
  {
    path: '',
    component: MonsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonsterPageRoutingModule {}
