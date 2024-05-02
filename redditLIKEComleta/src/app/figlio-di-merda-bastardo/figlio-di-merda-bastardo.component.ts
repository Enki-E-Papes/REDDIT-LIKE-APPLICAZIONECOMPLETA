import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio-di-merda-bastardo',
  templateUrl: './figlio-di-merda-bastardo.component.html',
  styleUrls: ['./figlio-di-merda-bastardo.component.css']
})
export class FiglioDiMerdaBastardoComponent {
  @Input()Ca!:Number;
  liu(){
   console.log(this.Ca); 
  }
}
