import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ImoveisModel } from 'src/app/shared/models/imoveis.model';
import { ImoveisService } from 'src/app/shared/services/imoveis.service';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.scss']
})
export class ImovelComponent implements OnInit {
  imovelForm: FormGroup;
  imovel: ImoveisModel;
  tipo: any[];

  constructor(
    private fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private imoveisService: ImoveisService,
    private route: Router
  ) {
    this.imovel = new ImoveisModel();
    this.tipo = ['Casa', 'Apartamento'];

    this.activedRoute.queryParams
    .subscribe((queryParams: Params) => {
      const id = queryParams['id'];
      if(id){
        this.imoveisService.findByiId(id)
          .subscribe((imovel: ImoveisModel) => {
            this.imovel = new ImoveisModel(imovel);
            this.imovelForm.patchValue(this.imovel);
          })
      }
    })
  }

  ngOnInit(): void {
    this.imovelForm = this.fb.group({
      id: [this.imovel.id],
      nome: [this.imovel.nome, Validators.required],
      tipo: [this.imovel.tipo, Validators.required],
      valor: [this.imovel.valor, Validators.required],
      condominio: [this.imovel.condominio],
      quartos: [this.imovel.quartos],
      banheiros: [this.imovel.banheiros],
      mobiliado: [this.imovel.mobiliado],
      area: [this.imovel.area],
      venda: [this.imovel.venda],
      aluguel: [this.imovel.aluguel],
      dataAnuncio: [this.imovel.dataAnuncio],
      endereco: [this.imovel.endereco],
      proprietarioId: [this.imovel.proprietarioId]
    })
  }

  store() {
    this.imovelForm.patchValue({ proprietarioId: 1 })

    if(!this.imovelForm.value.id){
      this.imoveisService.store(this.imovelForm.value)
        .subscribe(() => {
          this.route.navigate(['/imoveis']);
        })
    }else{
      this.imoveisService.update(this.imovelForm.value)
        .subscribe(() => {
          this.route.navigate(['/imoveis']);
        })
    }

  }

}
