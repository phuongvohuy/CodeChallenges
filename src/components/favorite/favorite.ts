import { Component } from '@angular/core';

/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'favorite',
  templateUrl: 'favorite.html'
})
export class FavoriteComponent {

  text: string;

  constructor() {
    console.log('Hello FavoriteComponent Component');
    this.text = 'FavoriteComponent';
  }

}
