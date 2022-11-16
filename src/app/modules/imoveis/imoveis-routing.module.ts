import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImoveisComponent } from './imoveis.component';
import { ImovelComponent } from './imovel/imovel.component';

const routes: Routes = [
  {
    path: '',
    component: ImoveisComponent
  },
  {
    path: ':id',
    component: ImovelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImoveisRoutingModule { }
