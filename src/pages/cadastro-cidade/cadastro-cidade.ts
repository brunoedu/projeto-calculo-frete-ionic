import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvider } from '../../providers/service-provider';

/*
  Generated class for the CadastroCidade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastro-cidade',
  templateUrl: 'cadastro-cidade.html'
})
export class CadastroCidadePage {

  cadastroCidade:FormGroup;
 
  enviarCadastro:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public service: ServiceProvider, public formBuilder: FormBuilder) {
  	this.cadastroCidade = formBuilder.group({
        nome: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]*'), Validators.required])],
        geocodigo: ['', Validators.required],
        latitude: ['', Validators.required],
        longitude: ['', Validators.required]
    });
  }

  cadastrarCidade(){
  	this.enviarCadastro = true;
  	if(this.cadastroCidade.valid){
        console.log(this.cadastroCidade.value)
        let nome = this.cadastroCidade.value.nome;
        let geocodigo = this.cadastroCidade.value.geocodigo;
        let latitude = this.cadastroCidade.value.latitude;
        let longitude = this.cadastroCidade.value.longitude;
        let jsonCity = JSON.stringify({nome, geocodigo, latitude, longitude});

        let loading = this.loadingCtrl.create({
	      content: 'Cadastrando cidade...'
	    });
	 
	    loading.present();
	    this.service.postCity(jsonCity).subscribe(
	        success=>{
	          this.showAlert("Sucesso");
	          this.cadastroCidade.reset();
	          this.enviarCadastro = false;
	          loading.dismiss();    
	        },
	        err=>{
	          this.showAlert("Falha");
	          loading.dismiss();
	        }
	      );
    }
  }

  showAlert(msg){
  	let alert = this.alertCtrl.create({
                          title: 'Cadastro de cidade',
                          message: msg+' ao cadastrar cidade!!',
                          buttons: ['Ok']
                    });
     alert.present();
  }

}
