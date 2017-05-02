import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.cadastroCidade = formBuilder.group({
        nome: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        geocodigo: ['', Validators.required],
        latitude: ['', Validators.required],
        longitude: ['', Validators.required]
    });
  }

  cadastrarCidade(){
  	this.enviarCadastro = true;
  	if(this.cadastroCidade.valid){
        console.log("success!")
        console.log(this.cadastroCidade.value);
    }
  }

}
