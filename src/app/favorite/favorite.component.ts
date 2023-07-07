//01 Input Properties
// import { Component, OnInit, Input } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input() isFavorite: boolean | undefined;
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//   }
// }

//02 Input Properties
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
//   inputs: ['isFavorite'],
// })
// export class FavoriteComponent implements OnInit {
//   isFavorite: boolean | undefined;
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//   }
// }

//03 Aliasing Input Properties
// import { Component, OnInit, Input } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input('is-favorite') isFavorite: boolean | undefined;
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//   }
// }

//04 Aliasing Input Properties
// import { Component, OnInit, Input } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input('isFavorite') isSelected: boolean | undefined;
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isSelected = !this.isSelected;
//   }
// }

//05 Output Properties
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input('isFavorite') isSelected: boolean | undefined;
//   @Output() change = new EventEmitter();
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isSelected = !this.isSelected;
//     this.change.emit();
//   }
// }

//06 Passing Event Data
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input('isFavorite') isSelected: boolean | undefined;
//   @Output() change = new EventEmitter();
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isSelected = !this.isSelected;
//     this.change.emit(this.isSelected);
//   }
// }

//07 Passing Event Data
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input('isFavorite') isSelected: boolean | undefined;
//   @Output() change = new EventEmitter();
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isSelected = !this.isSelected;
//     this.change.emit({ newValue: this.isSelected });
//   }
// }

//08 Passing Event Data
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input('isFavorite') isSelected: boolean | undefined;
//   @Output() change = new EventEmitter();
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isSelected = !this.isSelected;
//     this.change.emit({ newValue: this.isSelected });
//   }
// }
// export interface FavoriteChangedEventArgs {
//   newValue: boolean;
// }

//09 Aliasing Output Properties
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// @Component({
//   selector: 'favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css'],
// })
// export class FavoriteComponent implements OnInit {
//   @Input('isFavorite') isSelected: boolean | undefined;
//   @Output('change') click = new EventEmitter();
//   constructor() {}

//   ngOnInit(): void {}

//   onClick() {
//     this.isSelected = !this.isSelected;
//     this.click.emit({ newValue: this.isSelected });
//   }
// }
// export interface FavoriteChangedEventArgs {
//   newValue: boolean;
// }

//10 View Encapsulation
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean | undefined;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
