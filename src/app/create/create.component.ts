import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = "New Quote";
  newQuote(item:any): void{
    console.warn(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
