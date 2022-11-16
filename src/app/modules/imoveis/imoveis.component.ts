import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImoveisModel } from 'src/app/shared/models/imoveis.model';
import { ImoveisService } from 'src/app/shared/services/imoveis.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImoveisComponent implements OnInit {
  imoveis: ImoveisModel[];

  constructor(
    private imoveisService: ImoveisService,
    private router: Router
  ) {
    this.imoveis = [];
  }

  ngOnInit(): void {
    this.imoveisService.getAll()
      .subscribe((imoveis: ImoveisModel[]) => {
        this.imoveis = imoveis;
      })
  }

  new(){
    this.router.navigate(['/imoveis/new'], {
      queryParams: { id: '' }
    });
  }

  destroy(imovel: ImoveisModel){
    if(confirm('Desejar remover o registro selecionado ?')){
      this.imoveisService.destroy(imovel)
        .subscribe(() => this.imoveis = this.imoveis.filter(i => i.id !== imovel.id));
    }
  }

}
