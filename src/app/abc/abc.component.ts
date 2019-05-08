import { BmiService } from './../bmi.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  @Output() abcButtonClick: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private bmiService: BmiService) { }

  ngOnInit() {
    console.log(this.bmiService.calBMI(123, 45));
  }

  abcClick() {
    this.abcButtonClick.emit('abc Button Click!!');
  }

}
