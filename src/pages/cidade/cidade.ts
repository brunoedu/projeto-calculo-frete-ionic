import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroCidadePage } from '../cadastro-cidade/cadastro-cidade';
import { ListaCidadePage } from '../lista-cidade/lista-cidade';

/*
  Generated class for the Cidade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cidade',
  templateUrl: 'cidade.html'
})
export class CidadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  cadastrarCidades(){
  	this.navCtrl.push(CadastroCidadePage);
  }

  listarCidades(){
  	this.navCtrl.push(ListaCidadePage); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CidadePage');
  }

}
