import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../service/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public filme: IFilme;
  constructor(
    public dados: DadosService
  ) { }

  ngOnInit() {
    this.filme = this.dados.getDados('filme');
  }

}
