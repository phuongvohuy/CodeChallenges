import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare var moment: any;

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class UserInfo {
	name: string = '';
	email: string = '';
	updatedTime: string = '';
	createdTime: string = ''; 
	constructor(name: string, email: string, updatedTime: string, createdTime: string) {	
		//always make sure that value is not undefined or null
		this.name = name ? name : '';
		this.email = email ? email : '';
		this.updatedTime = updatedTime ? updatedTime : '';
		this.createdTime = createdTime ? createdTime : '';
	}

	getFromNow() {
		var yearsAgo = moment(this.updatedTime, "YYYYMMDD").fromNow();
		return yearsAgo;
	}
}

@Injectable()
export class UserProvider {
	userList: Array<UserInfo>;

	constructor(public http: HttpClient) {
		//console.log('Hello UserProvider Provider');
	}

	load(): Promise<any> {
		this.userList = new Array<UserInfo>();
		return new Promise((resolve, reject) => {
			this.http.get('assets/data/user.json').subscribe((data: Array<any>) => {
				for(var index: number = 0; index < data.length; index ++) {
					var dataItem: any = data[index];
					var userInfo: UserInfo = new UserInfo(dataItem['name'], dataItem['email'], dataItem['updatedTime'], dataItem['createdTime']);
					this.userList.push(userInfo);
				}
				resolve(this.userList);
			});
		})
	}

	searchByName(userName:string): Array<UserInfo> {
		let resultList: Array<UserInfo> = new Array<UserInfo>();
		//make sure userList is not null or underfined
		this.userList = this.userList ? this.userList : [];
		for(var index: number = 0; index < this.userList.length; index ++) {
			var userInfo = this.userList[index];
			var name = userInfo.name ? userInfo.name : '';
			if(name.toUpperCase().indexOf(userName.toUpperCase()) !== -1){
				resultList.push(userInfo);
			}
		}

		return resultList;
	}
}
