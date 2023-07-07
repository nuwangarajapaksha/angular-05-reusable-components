import { Component } from '@angular/core';

// 01,02,03,04 Component API, Input properties,Aliasing Input Properties
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   post = {
//     title: 'Title',
//     isFavorite: true,
//   };
// }

//05 Output Properties
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   post = {
//     title: 'Title',
//     isFavorite: true,
//   };

//   onFavoriteChanged() {
//     console.log('Favorite Change');
//   }
// }

//06 Passing Event Data
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   post = {
//     title: 'Title',
//     isFavorite: true,
//   };

//   onFavoriteChanged(isFavorite: any) {
//     console.log('Favorite Change', isFavorite);
//   }
// }

//07 Passing Event Data
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   post = {
//     title: 'Title',
//     isFavorite: true,
//   };

//   onFavoriteChanged(eventArgs: any) {
//     console.log('Favorite Change', eventArgs);
//   }
// }

//08,09,10 Passing Event Data,Aliasing Output Properties,View Encapsulation
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true,
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Change', eventArgs);
  }
}
