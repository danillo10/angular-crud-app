import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path        : 'imoveis',
    loadChildren: () => import('./modules/imoveis/imoveis.module').then((m) => m.ImoveisModule)
  },
  {
    path        : '**',
    loadChildren: () =>  import('./modules/imoveis/imoveis.module').then((m) => m.ImoveisModule)
  },
	{ path: '', redirectTo: '/imoveis', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
