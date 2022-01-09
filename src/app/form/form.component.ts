import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userData:any= {};
  getData(data: NgForm){
    console.warn(data);
    this.userData=data;
  }

  display: boolean | undefined;
  toggle(){
    this.display = !this.display;
  }

  constructor() { }


  ngOnInit(): void {
  }

}
