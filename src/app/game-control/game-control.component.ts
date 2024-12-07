import { Component, EventEmitter, Output } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [OddComponent, EvenComponent],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output() incrementCount= new EventEmitter<any>();
  startingNumber: any = 0;
  intervalId:any;
  numbersAdded:any = []

  onStart(){
      this.intervalId = setInterval(()=>{
      this.startingNumber = this.startingNumber+1;
      this.numbersAdded.push(this.startingNumber);
      console.log("Starting numbers:" + this.startingNumber);
      console.log("Numbers Added" + this.numbersAdded);
      this.incrementCount.emit(this.numbersAdded);
     this.incrementCount.subscribe((data) => console.log("Emitted Event"+data));
    }, 1000);
  }

  onStop(){
    clearInterval(this.intervalId);
  }
}
