import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit { 
  @Input() quotes:Quote[]=[]   
    
    deleteQuote(index:number) {
      this.quotes.splice(index,1);
  }

  like(index:number) {
    this.quotes[index].votes = this.quotes[index].votes +1;
  }
  dislike(index:number) {
    this.quotes[index].votes = this.quotes[index].votes -1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}






