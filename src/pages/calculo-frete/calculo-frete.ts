import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
  Generated class for the CalculoFrete page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calculo-frete',
  templateUrl: 'calculo-frete.html'
})
export class CalculoFretePage {

  calculoFrete:FormGroup;
 
  enviarCalculo:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  	this.calculoFrete = formBuilder.group({
        origem: ['', Validators.required],
        destino: ['', Validators.required]
    });
  }

  calcularFrete(){
  	this.enviarCalculo = true;
  	if(this.calculoFrete.valid){
        console.log("success!")
        console.log(this.calculoFrete.value);
    }
  }

}
