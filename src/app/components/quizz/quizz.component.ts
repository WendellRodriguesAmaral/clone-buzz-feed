import { Component, OnInit } from '@angular/core';

import quizz_questions from './../../../assets/data/quizz_questions.json';

const A = 'A';
const B = 'B';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  title: string = "";

  questions:any;
  questionsSelected:any;

  answers:string[] = [];
  answersSelected:string = "" ;

  questionIndex:number = 0;
  questionsMaxIndex:number = 0;

  finish:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.finish = false;
      this.title = quizz_questions.title;
      this.questions = quizz_questions.questions;
      this.questionsSelected = this.questions[this.questionIndex]

      this.questionIndex = 0;
      this.questionsMaxIndex = this.questions.length;
    }
  }


  playerChoose(answer:string){
    this.answers.push(answer);
    console.log(this.answers);
    this.nextStep();      
  }

  nextStep(){
    this.questionIndex += 1;

    if(this.questionsMaxIndex > this.questionIndex){
      this.questionsSelected = this.questions[this.questionIndex]
    }else{
      this.finish = true;
      this.showAnswer();
    }
  }

  showAnswer(){
    let optionA:number = 0;
    let optionB:number = 0;

    this.answers.forEach(elem => elem ==  A ? optionA++ : optionB++)

    this.answersSelected = quizz_questions.results[
      optionA > optionB ? A : B
    ]  
  }

}
