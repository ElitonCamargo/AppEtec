/* eslint-disable @typescript-eslint/naming-convention */
import { IGeneros } from './../models/IGeneros.model';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private api = 'https://api.themoviedb.org/3';
  private key = '034c5fdfe098d8cb374c2152cf44c2e7';
  private language = 'pt-BR';

  constructor(
    private toastController: ToastController,
    private httpClient: HttpClient
  ) { }

  public listar(): Observable<IGeneros>{
    const url = `${this.api}/genre/movie/list?api_key=${this.key}&language=${this.language}`;
    return this.httpClient.get(url).pipe(
      map(result => result),
      catchError(error => this.exibirErro(error))
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
