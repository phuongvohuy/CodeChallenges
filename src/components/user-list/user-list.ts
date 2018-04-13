import { Component, Input } from '@angular/core';

import {UserInfo, UserProvider} from "../../providers/user/user";

/**
 * Generated class for the UserListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'user-list',
	templateUrl: 'user-list.html'
})
export class UserListComponent {
	@Input() userProvider: UserProvider;

	userList: Array<UserInfo>;

	constructor() {
			
	}

	ngOnInit() {
		this.userList = this.userProvider.userList;
	}

	onSearchChange(event:any) {
		// set val to the value of the searchbar
		let userName = event.target.value;
		if(userName) {
			this.userList = this.userProvider.searchByName(userName);
		}
	}

	onCancel() {
		this.userList = this.userProvider.userList;
	}

	onClear() {
		this.userList = this.userProvider.userList;	
	}

}
