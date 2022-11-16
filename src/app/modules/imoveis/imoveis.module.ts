import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImoveisRoutingModule } from './imoveis-routing.module';
import { ImovelComponent } from './imovel/imovel.component';
import { ImoveisComponent } from './imoveis.component';
import { ImoveisService } from 'src/app/shared/services/imoveis.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { SelectModule } from 'src/app/shared/components/select/select.module';

@NgModule({
  declarations: [
    ImoveisComponent,
    ImovelComponent
  ],
  imports: [
    CommonModule,
    ImoveisRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputModule,
    SelectModule
  ],
  providers: [
    ImoveisService
  ]
})
export class ImoveisModule { }
