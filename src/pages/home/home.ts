import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {UserProvider, UserInfo} from '../../providers/user/user';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public static MENU_ALL_USER = 'ALL_USER';
	public static MENU_FAVORITE = 'FAVORITE';
	public static MENU_ADMINISTRATOR = 'ADMINISTRATOR';
	public static MENU_NON_ADMINS = 'NON_ADMINS';
	public static MENU_ARCHIVED = 'ARCHIVED';

	userList: Array<UserInfo> = [];
	dataReady: boolean = false;
	selectePage: string = '';

	constructor(public navCtrl: NavController, private userProvider: UserProvider) {
		this.selectePage = HomePage.MENU_ALL_USER;
	}

	ngOnInit() {
		//console.log('$onInit HomePage', this.userProvider);
		this.userProvider.load().then((result: any) => {
			//console.log('result ', result);
			this.userList = result;
			this.dataReady = true;
		}).catch((reson: string) => {
			this.dataReady = true;
		});
	}

	chooseMenu(value) {
		//console.log('chooseAllUser', value);
		this.selectePage = value;
	}

}
