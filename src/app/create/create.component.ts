import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = "New Quote";
  getData(data:NgForm): void{
      console.warn(data)
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
