export class ProprietarioModel {
  id?: number;
  nome?: string;
  imovelId?: number;

  constructor(data?: ProprietarioModel | any) {
    data = data || {};
    this.id = data.id ?? null;
    this.nome = data.nome ?? null;
    this.imovelId = data.imovelId ?? null;
  }

}
