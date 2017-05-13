import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the ListaCidade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-cidade',
  templateUrl: 'lista-cidade.html'
})
export class ListaCidadePage implements OnInit{
  
  cities:any;

  constructor(public navCtrl: NavController, public service: ServiceProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navParams: NavParams) {}

  ngOnInit(){
  	this.getCities();
  }

  getCities(){
  	let loading = this.loadingCtrl.create({
	      content: 'Carregando cidades...'
	});
	 
	loading.present();
  	this.service.getCities().subscribe(
          cities=>{  
          	this.cities = cities;
          	loading.dismiss();
          },
          err=>{            
          	loading.dismiss();

		  	let alert = this.alertCtrl.create({
		                          title: 'Listagem de cidades',
		                          message: 'Falha ao carregar cidades!!',
		                          buttons: [
		                          	  {
	 	                                text: 'Carregar novamente',
			                            handler: data => {  
			                              this.getCities();		                              
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
