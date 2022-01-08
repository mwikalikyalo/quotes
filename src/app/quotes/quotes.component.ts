import { Component, OnInit } from '@angular/core';
import { quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:QuotesComponent[] = [
    {quote:'The purpose of our lives is to be happy.', by:'Stephen King', category:'Religion', submitted:'Mwikali Kyalo'},
    {id:2,name:'Buy Cookies'},
    {id:3,name:'Get new Phone Case'},
    {id:4,name:'Get Dog Food'},
    {id:5,name:'Solve math homework'},
    {id:6,name:'Plot my world domination plan'},
  ];
}
  
    

  constructor() { 
    this.quotes = ['The purpose of our lives is to be happy.','Get busy living or get busy dying.',
    'You only live once, but if you do it right, once is enough.','Money and success does not change people,they merely amplify what is already there.','Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.'];
    this.by = [':Stephen King', ':Dalai Lama', ':Mae West', ':Maya Angelou', ':Will Smith'];
    this.category = ['Religion', 'Mental Health', 'Age', 'Finances', 'Love'];
    this.submitted = ['Mwikali Kyalo', 'Roselyne Mwongeli', 'Samuel Lemeiyan', 'Louise Njeri', 'Pendo Becky']

    
  }

  ngOnInit(): void {
  }

}
