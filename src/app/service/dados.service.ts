import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = [];
  constructor() { }

  public setDados(index: string, dado: any): boolean{
    if(index){
      this.dados[index] = dado;
      return true;
    }
    return false;
  }

  public getDados(index: string): any{
    return this.dados[index];
  }

  public deleteDados(index: string): boolean{
    return delete this.dados[index];
  }
}

