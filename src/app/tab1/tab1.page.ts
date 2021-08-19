import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nomeTab = 'Filmes favoritos';
  public buscarTexto: string;

  public listaDeFilmes: IFilme[] = [
    {
      imagem: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      nome: 'Soul: Uma Aventura com Alma (2020)',
      lancamento: '25/12/2020',
      duracao: '1h 40m',
      generos: ['Animação', 'Comédia', 'Família', 'Aventura'],
      avaliacao: 83,
      page: '/soul'
    },
    {
      imagem: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Am1ipOQiOMrH55tCCT2ObNiF1rW.jpg',
      nome: 'Monster Hunter (2020)',
      lancamento: '25/02/2021',
      duracao: '1h 43m',
      generos: ['Ação', 'Fantasia', 'Aventura','Ação', 'Fantasia', 'Aventura'],
      avaliacao: 70,
      page: '/monster'
    }
  ];

  constructor(
    public alertController: AlertController
  ) {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'alertDanger',
      header: 'Teset',
      buttons: [
        {
          text: '1',
          cssClass: 'alertDanger',
          handler: () => {
            console.log('1');
          }
        },
        {
          text: '2',
          handler: () => {
            console.log('2');
          }
        },
        {
          text: '3',
          handler: () => {
            console.log('3');
          }
        },
        {
          text: '4',
          handler: () => {
            console.log('4');
          }
        },
        {
          text: '5',
          handler: () => {
            console.log('5');
          }
        },
      ]
    });

    await alert.present();
  }


  buscar(element: any): void{
    const textBusca = element.detail.value;
    console.log(textBusca);
  }

}
