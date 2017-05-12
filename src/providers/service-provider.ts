import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {
  
  //api:string="http://localhost:8080/api/rest/";
  api:string="https://unisal-calculo-frete-api-ionic.herokuapp.com/rest/";

  constructor(public http: Http) {
  }

	getCities(){
		return this.http.get(this.api+"city", {
			method:"GET"
		}).map(
			(res:Response) => {
				return res.json();
			}
		);
	}

	postCity(jsonCidade){		
	    let headers = new Headers({'Content-Type' : 'application/json;charset=utf-8'});
	    return this.http.post(this.api+"city", jsonCidade, {
	        headers:headers,
	        method:"POST"
	    }).map(
	        (res:Response) => {
	        	return res.json();
	        }
	    );
	}

}

