import { Component } from '@angular/core';

/**
 * Generated class for the AdministratorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'administrator',
  templateUrl: 'administrator.html'
})
export class AdministratorComponent {

  text: string;

  constructor() {
    console.log('Hello AdministratorComponent Component');
    this.text = 'AdministratorComponent';
  }

}
