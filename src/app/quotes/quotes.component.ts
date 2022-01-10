import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes:  Quote [] = [
        new Quote(1, 'Mwikali', 'Life is not about finding yourself.Life is about creating yourself', 'George Bernard Shaw', new Date(2020, 6, 15)),
        new Quote(2, 'Mwenda', 'When someone shows you who they are, believe them the first time', 'Maya Angelou', new Date(1996, 3, 20)),
        new Quote(3, 'Wendo', 'Some cause happiness wherever they go, others whenever they go', 'Oscar Wilde', new Date(2012, 8, 17)),
        new Quote(4, 'Rahma', 'The Supreme art of war is to subdue the enemy without fighting', 'Sun Tzu', new Date(2012, 8, 17)),
      ];
        
    showDescription= false;

  addNewQuote(quote: { id: number; completeDate: string | number | Date; }): void {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push;
  }

    deleteQuote(isComplete: Boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}






