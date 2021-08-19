import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'soul',
    loadChildren: () => import('./filmes/soul/soul.module').then( m => m.SoulPageModule)
  },
  {
    path: 'monster',
    loadChildren: () => import('./filmes/monster/monster.module').then( m => m.MonsterPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
