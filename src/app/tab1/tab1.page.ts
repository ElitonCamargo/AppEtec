import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nomePagina = 'Lançamentos';
  //public buscar: string;
  constructor() {}

  buscar(texto: any): void{
    console.log(texto.detail.value);
  }
}
