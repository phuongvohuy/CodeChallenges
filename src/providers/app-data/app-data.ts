import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppDataProvider provider.
	Class for store runtime information
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppDataProvider {
	public isMobile: boolean = null;

	constructor(public http: HttpClient) {
		//console.log('Hello AppDataProvider Provider');
	}

}
