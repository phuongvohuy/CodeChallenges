import { Component } from '@angular/core';

/**
 * Generated class for the NonAdminComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'non-admin',
  templateUrl: 'non-admin.html'
})
export class NonAdminComponent {

  text: string;

  constructor() {
    console.log('Hello NonAdminComponent Component');
    this.text = 'NonAdminComponent';
  }

}
