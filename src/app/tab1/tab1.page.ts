import { DadosService } from './../service/dados.service';
import { GenerosService } from './../service/generos.service';
import { FilmeService } from './../service/filme.service';
import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public nomeTab = 'Filmes favoritos';
  public buscarTexto: string;

  public listaDeFilmes: IFilme[] = [];
  public generos: string[] = [];

  constructor(
    public alertCont: AlertController,
    public toastController: ToastController,
    public filmeService: FilmeService,
    public generosService: GenerosService,
    public rout: Router,
    public dados: DadosService
  ) {}

  listarFilmes(){
    this.filmeService.listarPopulares().subscribe(dados =>{this.listaDeFilmes = dados.results;});
  }

  listarGeneros(): void{
    this.generosService.listar().subscribe(
      listaGeneros => {listaGeneros.genres.forEach(cadaGenero =>{this.generos[cadaGenero.id] = cadaGenero.name;});}
    );
  }

  buscar(element: any): void{
    const textBusca: string = element.detail.value;
    if(textBusca.length > 0){
      this.filmeService.buscarPorNome(textBusca).subscribe(listFilme => {
        this.listaDeFilmes = listFilme.results;
      });
    }
    else{
      this.listarFilmes();
    }
  }

  ngOnInit(){
    this.listarFilmes();
    this.listarGeneros();
  }

  async curtir(filme: string) {
    const alert = await this.alertCont.create({
      header: 'Confirmação!',
      message: 'Tem ceteza desta ação?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.link(`Link atribuido: ${filme}`);
          }
        }
      ]
    });

    await alert.present();
  }

  public verDetalhes(filme: IFilme): void{
    this.dados.setDados('filme',filme);
    const routa = `/detalhes/${filme.id}`;
    this.rout.navigateByUrl(routa);
  }

  async favoritar(filme: IFilme) {
    const alert = await this.alertCont.create({
      header: 'Favoritar',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.filmeService.favoritar(filme).subscribe(filmeCadastrado => {
              if(filmeCadastrado.objectId){
                this.link(`${filme.title} foi favoritado com sucesso!!!`);
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }


  async link(msg: string){
    const toast = await this.toastController.create({
      header: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}
