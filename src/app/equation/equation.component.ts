import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import {delay, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  seconPerSolution = 0


  mathForm = new FormGroup({
    a: new FormControl(this.ramdownNumber()),
    b: new FormControl(this.ramdownNumber()),
    answer: new FormControl('')
  },[
    CustomValidators.addition('answer','a','b')
  ])

  constructor() { }


  get a(){
    return this.mathForm.get('a').value;
  }



  ngOnInit(): void {

    // const startTime= new Date();
    // let numberSolved = 0;

this.mathForm.statusChanges

  .pipe(
  filter(value=> value === 'VALID'),
  delay(100),
  scan( acc =>{

    return {
      numberSolved: acc.numberSolved +1,
      straTimes: acc.straTimes
    };
  },
  {numberSolved: 0, straTimes:new Date() }

  ))


.subscribe(({numberSolved,straTimes})=>{


  this.seconPerSolution = (new Date().getTime() - straTimes.getTime()) /numberSolved/1000;
    this.mathForm.setValue({
      a: this.ramdownNumber(),
      b: this.ramdownNumber(),
      answer: ''
    })


})

  }

  ramdownNumber(){
    return Math.floor(Math.random() *10)
  }

}
