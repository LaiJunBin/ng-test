import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {

  name = 'Lai';
  url = 'https://google.com';
  @Input() nt = 0;
  @Output() MoneyChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  sayHello() {
    alert('Hello ' + this.name);
  }
  onMoneyChange() {
    this.MoneyChange.emit(this.nt);
  }
}
