import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nomeTab = 'Filmes favoritos';
  public buscarTexto: string;

  public listaDeFilmes = [
    {
      imagem : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      nome: 'Soul: Uma Aventura com Alma (2020)',
      lancamento: '25/12/2020',
      duracao: '1h 40m',
      generos: ['Animação', 'Comédia', 'Família', 'Aventura'],
      avaliacao: '83%'
    },
    {
      imagem : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Am1ipOQiOMrH55tCCT2ObNiF1rW.jpg',
      nome: 'Monster Hunter (2020)',
      lancamento: '25/02/2021',
      duracao: '1h 43m',
      generos: ['Ação', 'Fantasia', 'Aventura','Ação', 'Fantasia', 'Aventura'],
      avaliacao: '70%'
    }
  ];

  constructor(
    public alertCont: AlertController,
    public toastController: ToastController,
  ) {}

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
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.link(filme);
          }
        }
      ]
    });

    await alert.present();
  }

  async avaliacao() {
    const alert = await this.alertCont.create({
      header: 'Nota',
      inputs: [
        {
          name: 'checkbox1',
          type: 'radio',
          label: '1',
          value: '1',
          handler: () => {
            console.log('Checkbox 1 selected');
          }
        },
        {
          name: 'checkbox2',
          label: '2',
          value: '2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },
        {
          name: 'checkbox3',
          label: '3',
          value: '3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },
        {
          name: 'checkbox4',
          label: '4',
          value: '4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },
        {
          name: 'checkbox5',
          label: '5',
          value: '5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  async link(filme: string){
    const toast = await this.toastController.create({
      header: `Link atribuido: ${filme}`,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  buscar(element: any): void{
    const textBusca = element.detail.value;
    console.log(textBusca);
  }

}
