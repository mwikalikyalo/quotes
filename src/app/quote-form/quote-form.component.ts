import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quotes:Quote[]=[]
  public author!: string
  public descriptions!: string
  public submitters!: string
  public completeDate!: Date
  public votes: number=0

  submitting = false;
  submitQuote(){
    this.quotes.push(new Quote(this.author,this.descriptions, 
      this.submitters,this.completeDate,this.votes))
    console.log(this.quotes);
    }

    onSubmit(){
      this.submitting = true;
    }


  constructor() { }

  ngOnInit(): void {
  }

}
