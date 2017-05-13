import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the ListaFrete page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-frete',
  templateUrl: 'lista-frete.html'
})
export class ListaFretePage implements OnInit{
  
  fretes:any;

  constructor(public navCtrl: NavController, public service: ServiceProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navParams: NavParams) {}

  ngOnInit(){
  	this.getFretes();
  }

  getFretes(){
  	let loading = this.loadingCtrl.create({
	      content: 'Carregando fretes...'
	});
	 
	loading.present();
  	this.service.getFretes().subscribe(
          fretes=>{  
          	this.fretes = fretes;
          	loading.dismiss();
          },
          err=>{            
          	loading.dismiss();

		  	let alert = this.alertCtrl.create({
		                          title: 'Listagem de fretes',
		                          message: 'Falha ao carregar fretes!!',
		                          buttons: [
		                          	  {
	 	                                text: 'Carregar novamente',
			                            handler: data => {  
			                              this.getFretes();		                              
			                          	}
			                          },
		                              {
		                              	text: 'Cancelar',
		                              	role: 'cancel',
		                              }		                            
		                          ]
		                    });
		     alert.present();
          }
      );
  }

}
