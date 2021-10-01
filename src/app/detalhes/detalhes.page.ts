import { FilmeService } from './../service/filme.service';
import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../service/dados.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilmeDetalhes } from '../models/IFilmeDetalhes.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public filme: IFilme;
  public id = 0;

  public filmeDetalhes: IFilmeDetalhes = {};


  constructor(
    private dados: DadosService,
    private activetRouter: ActivatedRoute,
    private filmeService: FilmeService
  ) { }

  ngOnInit() {
    this.filme = this.dados.getDados('filme');
    this.id = Number(this.activetRouter.snapshot.paramMap.get('id'));
    this.filmeService.buscarPorId(this.id).subscribe(result => {
      this.filmeDetalhes = result;
    });
  }
}
