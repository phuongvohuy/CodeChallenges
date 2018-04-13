import { Component } from '@angular/core';

/**
 * Generated class for the ArchivedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'archived',
  templateUrl: 'archived.html'
})
export class ArchivedComponent {

  text: string;

  constructor() {
    console.log('Hello ArchivedComponent Component');
    this.text = 'ArchivedComponent';
  }

}
