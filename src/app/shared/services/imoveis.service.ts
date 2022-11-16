import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImoveisModel } from '../models/imoveis.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ImoveisModel[]>{
    return this.http.get<ImoveisModel[]>(`${environment.host}imovel`)
      .pipe(res => res)
  }

  store(imovel: ImoveisModel): Observable<ImoveisModel> {
    return this.http.post<ImoveisModel>(`${environment.host}imovel`, imovel)
      .pipe(res => res);
  }

  findByiId(id: number) {
    return this.http.get<ImoveisModel>(`${environment.host}imovel/${id}`)
      .pipe(res => res)
  }

  update(imovel: ImoveisModel): Observable<ImoveisModel> {
    return this.http.put<ImoveisModel>(`${environment.host}imovel/${imovel.id}`, imovel)
      .pipe(res => res);
  }

  destroy(imovel: ImoveisModel): Observable<ImoveisModel> {
    return this.http.delete<ImoveisModel>(`${environment.host}imovel/${imovel.id}`)
      .pipe(res => res);
  }
}
