import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  @Output() abcButtonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  abcClick() {
    this.abcButtonClick.emit('abc Button Click!!');
  }

}
