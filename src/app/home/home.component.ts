import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CreateComponent } from "@angular/create.component";
import { getTokenSourceMapRange } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= 'New Quote';

  constructor(private router: Router) {
    goToPage(pageName: string):void{
      this.router.navigate([`$[pageName]`]),
    }
   }

  ngOnInit(): void {
  }

}
