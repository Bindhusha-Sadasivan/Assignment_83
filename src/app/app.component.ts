import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from "./game-control/odd/odd.component";
import { EvenComponent } from "./game-control/even/even.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameControlComponent, OddComponent, EvenComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment_83';
  storeIncrementedNumbers:any=[];
  sendOddNumber:any=[];
  sendEvenNumber:any=[]


  handleIncrementCounted(incremenetedNumbers:any){
    this.storeIncrementedNumbers = incremenetedNumbers;
    console.log("Received Incremented Numbers" + this.storeIncrementedNumbers);

    this.sendOddNumber = [];
    this.sendEvenNumber = [];

    this.storeIncrementedNumbers.forEach((element:any) => {
      if(element%2 === 0){
        this.sendEvenNumber.push(element);
      }
      else{
        this.sendOddNumber.push(element);
      }
    });

    console.log("Odd nUmbers"+this.sendOddNumber);
    console.log("Even numbers"+this.sendEvenNumber);

  }
}
