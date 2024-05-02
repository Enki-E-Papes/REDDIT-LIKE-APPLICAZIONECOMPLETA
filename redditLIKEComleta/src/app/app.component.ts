import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canguroPalrnitano : number; //dichiarazione |oppure=>  canguroPalrnitano:number= 0; => serve per non fare anche il constructor
  arrayDEllaMadonna: Array<Number>=[1,2,3,4,4]
  constructor(){
    this.canguroPalrnitano = 0

    
  }
}