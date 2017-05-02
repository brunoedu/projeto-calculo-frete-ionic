import { Component, trigger, state, style, transition, animate } from '@angular/core';
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
  templateUrl: 'cidade.html',
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
export class CidadePage {

  imgCidade:boolean=false;  
  fadeStateCidade: String = 'invisible';
  imgListaCidade:boolean=false;  
  fadeStateListaCidade: String = 'invisible';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  cadastrarCidades(){
  	this.navCtrl.push(CadastroCidadePage);
  }

  listarCidades(){
  	this.navCtrl.push(ListaCidadePage); 
  }

  carregaFotoCidade() {
  	this.imgCidade = true
    this.fadeStateCidade = (this.fadeStateCidade == 'visible') ? 'invisible' : 'visible';    
  }  

  carregaFotoListaCidade() {
  	this.imgListaCidade = true
    this.fadeStateListaCidade = (this.fadeStateListaCidade == 'visible') ? 'invisible' : 'visible';    
  }

}
