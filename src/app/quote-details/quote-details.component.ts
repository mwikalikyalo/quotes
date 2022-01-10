import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote | undefined;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete: boolean): void {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
