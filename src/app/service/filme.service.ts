import { IFilmesFavoritos } from '../models/IFilmesFavoritos.model';
/* eslint-disable @typescript-eslint/naming-convention */
import { IFilmeDetalhes } from './../models/IFilmeDetalhes.model';
import { IListaFilmes } from './../models/IListaFilmes.model';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IFilme } from '../models/IFilme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private api = 'https://api.themoviedb.org/3';
  private key = 'api_key=034c5fdfe098d8cb374c2152cf44c2e7';
  private language = 'pt-BR';
  private region= 'BR';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  public listarPopulares(): Observable<IListaFilmes>{
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=034c5fdfe098d8cb374c2152cf44c2e7&language=pt-BR&page=1&region=BR';
    console.log('URL:'+ url);
    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

  public buscarPorNome(filtro: string, page: string = '1'): Observable<IListaFilmes>{
    const recurso = '/search/movie';
    const url = `${this.api}${recurso}?${this.key}&language=${this.language}&region=${this.region}&page=${page}&query=${filtro}`;
    console.log('URL:'+ url);
    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  public buscarFavoritos(): Observable<IFilmesFavoritos>{
    const url = 'https://parseapi.back4app.com/classes/Filme';

    const configApi = {
      'X-Parse-Application-Id': 'sppUa0RnIdfZhrVFpC63cuF6WRLKIEQh3sGxwPFe',
      'X-Parse-REST-API-Key': 'J7RXIr1LnPs5vRz49BIqsXCF5l8h8qGeyhUFNMc5'
    };
    const headers = new HttpHeaders(configApi);

    return this.http.get<IFilmesFavoritos>(url,{headers}).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro2(erro))
    );
  }

  public buscarPorId(id: number): Observable<IFilmeDetalhes>{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=034c5fdfe098d8cb374c2152cf44c2e7&language=pt-BR`;
    return this.http.get<IFilmeDetalhes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  private async exibirErro(erro: any) {
    const toast = await this.toastController.create({
      header: 'Erro ao consultar a API!!!',
      position: 'middle',
      color: 'danger',
      message: 'Motivo: ' + erro.error.errors[0],
      duration: 2000
    });
    toast.present();
    return null;
  }

  private async exibirErro2(erro: any) {
    const toast = await this.toastController.create({
      header: 'Erro ao consultar a API!!!',
      position: 'middle',
      color: 'danger',
      message: 'Motivo: ' + erro,
      duration: 2000
    });
    toast.present();
    return null;
  }
}
