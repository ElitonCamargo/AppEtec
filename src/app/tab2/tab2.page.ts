import { FilmeService } from './../service/filme.service';
import { GenerosService } from './../service/generos.service';

import { Component, OnInit } from '@angular/core';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public listaFilmes: IFilme[];
  public generos: string[] = [];


  constructor(
    public filmeService: FilmeService,
    public generosService: GenerosService
  ) {}

  ngOnInit(){
    this.buscarFilmesFavoritos();
    this.listarGeneros();
  }

  public listarGeneros(): void{
    this.generosService.listar().subscribe(
      listaGeneros => {listaGeneros.genres.forEach(cadaGenero =>{this.generos[cadaGenero.id] = cadaGenero.name;});}
    );
  }

  public buscarFilmesFavoritos(): void{
    this.filmeService.buscarFavoritos().subscribe(filmesEncontrado =>{
      this.listaFilmes = filmesEncontrado.results;
    });
  }

  verDetalhes(): void{}
  remover(filme: IFilme): void{

  }
}
