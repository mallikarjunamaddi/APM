import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public pageTitle = "ACME Product Management";
  public showSummary = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnClick() {
    this.showSummary = !this.showSummary;
    if(this.showSummary){
    this.router.navigate([{outlets: {summary: ['summaryMessage']}}]);
    }
    else{
      this.router.navigate([{outlets: {summary: null}}]);
    }
  }
}
