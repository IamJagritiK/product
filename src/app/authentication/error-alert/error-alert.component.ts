// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-error-alert',
//   templateUrl: './error-alert.component.html',
//   styleUrls: ['./error-alert.component.scss']
// })
// export class ErrorAlertComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent {

  @Input() errorMessage: any;

}
