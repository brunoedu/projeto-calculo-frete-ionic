import { Component, trigger, state, style, transition, animate } from '@angular/core';
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
  templateUrl: 'frete.html',
  animations: [ 
    trigger('fade', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.1
      })),
      transition('visible <=> invisible', animate('500ms linear'))
    ]) 
  ]
})
export class FretePage {

  imgFrete:boolean=false;  
  fadeStateFrete: String = 'invisible';
  imgListaFrete:boolean=false;  
  fadeStateListaFrete: String = 'invisible';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  calcularFrete(){
  	this.navCtrl.push(CalculoFretePage);
  }

  listarFretes(){
  	this.navCtrl.push(ListaFretePage); 
  }

  carregaFotoFrete() {
  	this.imgFrete = true
    this.fadeStateFrete = (this.fadeStateFrete == 'visible') ? 'invisible' : 'visible';    
  }  

  carregaFotoListaFrete() {
  	this.imgListaFrete = true
    this.fadeStateListaFrete = (this.fadeStateListaFrete == 'visible') ? 'invisible' : 'visible';    
  }

}
