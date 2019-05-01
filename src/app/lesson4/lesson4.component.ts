import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.css']
})
export class Lesson4Component implements OnInit {
  obj = {
    a: 5,
    b: 10
  };
  now = new Date();

  account: Account = {
    account: 'abc',
    password: 'pass'
  };

  constructor() { }

  ngOnInit() {
  }

}

export class Account {
  account: string;
  password: string;
  email?: string;
}
