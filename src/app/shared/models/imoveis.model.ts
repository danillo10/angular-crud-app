export enum Tipo {
  Apartamento,
  Casa
}

export class EnderecoModel {
  id: number;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;

  constructor(endereco?: EnderecoModel | any) {
    this.id = endereco.id ?? null;
    this.rua = endereco.rua ?? null;
    this.numero = endereco.numero ?? null;
    this.bairro = endereco.bairro ?? null;
    this.cidade = endereco.cidade ?? null;
    this.uf = endereco.uf ?? null;
    this.cep = endereco.cep ?? null;
  }
}

export class ImoveisModel {
  id: number;
  nome: string;
  tipo: Tipo;
  valor: number;
  condominio: number;
  quartos: number;
  banheiros: number;
  mobiliado: boolean;
  area: number;
  venda: boolean;
  aluguel: boolean;
  dataAnuncio: Date;
  endereco: EnderecoModel;
  proprietarioId: number;

  constructor(imovel?: ImoveisModel | any) {
    imovel = imovel || {};

    this.id = imovel.id ?? null;
    this.nome = imovel.nome ?? null;
    this.tipo = imovel.tipo ?? null;
    this.valor = imovel.valor ?? null;
    this.condominio = imovel.condominio ?? null;
    this.quartos = imovel.quartos ?? null;
    this.banheiros = imovel.banheiros ?? null;
    this.mobiliado = imovel.mobiliado ?? null;
    this.area = imovel.area ?? null;
    this.venda = imovel.venda ?? null;
    this.aluguel = imovel.aluguel ?? null;
    this.dataAnuncio = imovel.dataAnuncio ?? null;
    this.endereco = imovel.endereco ?? null;
    this.proprietarioId = imovel.proprietarioId ?? null;
  }
}
