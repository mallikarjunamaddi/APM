import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
pageTitle: string = "Log In";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login():void {
    this.router.navigate(['/products']);
  }

  onCancel():void {
    this.router.navigate(['/welcome']);
  }

}
