import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {

  name = 'Lai';
  url = 'https://google.com';
  nt = 0;

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    alert('Hello ' + this.name);
  }

}
