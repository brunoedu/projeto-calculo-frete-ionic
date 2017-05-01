import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculoFretePage } from '../calculo-frete/calculo-frete';
import { ListaFretePage } from '../lista-frete/lista-frete';

/*
  Generated class for the Frete page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-frete',
  templateUrl: 'frete.html'
})
export class FretePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  calcularFrete(){
  	this.navCtrl.push(CalculoFretePage);
  }

  listarFretes(){
  	this.navCtrl.push(ListaFretePage); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FretePage');
  }

}
