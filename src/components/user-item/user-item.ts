import { Component, Input } from '@angular/core';
import { UserInfo } from '../../providers/user/user';
import { AppDataProvider } from '../../providers/app-data/app-data';
/**
 * Generated class for the UserItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'user-item',
	templateUrl: 'user-item.html'
})
export class UserItemComponent {
	@Input() userInfo: UserInfo;
	isMobile: boolean = true;

	constructor(appData: AppDataProvider) {
		//console.log('Hello UserItemComponent Component');
		this.isMobile = appData.isMobile;
	}

	ngOnInit() {
		
	}

	chooseAction(): void {
		console.log('chooseAction');
	}

}
