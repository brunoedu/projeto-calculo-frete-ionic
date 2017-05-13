import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the CalculoFrete page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calculo-frete',
  templateUrl: 'calculo-frete.html'
})
export class CalculoFretePage implements OnInit{

  calculoFrete:FormGroup;
  cities:any;
  enviarCalculo:boolean = false;
  retornoFrete:any=undefined;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public service: ServiceProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  	this.calculoFrete = formBuilder.group({
        origem: ['', Validators.required],
        destino: ['', Validators.required]
    });
  }

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
          	console.log(this.cities);
          },
          err=>{            
            console.log(err);
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

  calcularFrete(){
  	this.enviarCalculo = true;
  	if(this.calculoFrete.valid){
  		let cidadeA = this.getCityById(this.calculoFrete.value.origem);
  		let cidadeB = this.getCityById(this.calculoFrete.value.destino);
        let jsonFrete = JSON.stringify({cidadeA, cidadeB});

        let loading = this.loadingCtrl.create({
	      content: 'Calculando frete...'
	    });
	 
	    loading.present();
	    this.service.postFrete(jsonFrete).subscribe(
	        success=>{
	          this.showAlert("Sucesso");
	          this.retornoFrete=success;
	          this.calculoFrete.reset();
	          this.enviarCalculo = false;
	          loading.dismiss();    
	        },
	        err=>{
	          this.showAlert("Falha");
	          loading.dismiss();
	        }
	      );
    }
  }

  getCityById(id){
  	for(let city of this.cities){
  		if(city.id==id)
  			return city;
  	}
  }

  removeArrayCity(type){
  	if(type==1 && this.calculoFrete.value.origem == this.calculoFrete.value.destino)
  		this.calculoFrete.get('destino').setValue('');
  	else if(this.calculoFrete.value.origem == this.calculoFrete.value.destino)
  		this.calculoFrete.get('origem').setValue('');
  	console.log(this.calculoFrete.value);
  }

  showAlert(msg){
  	let alert = this.alertCtrl.create({
                          title: 'Cálculo de frete',
                          message: msg+' ao calcular frete!!',
                          buttons: ['Ok']
                    });
     alert.present();
  }

}
