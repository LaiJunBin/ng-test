import { User } from './../model/user.model';
import { HttpService } from './../http/http.service';
import { BmiService } from './../bmi.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  @Output() abcButtonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private bmiService: BmiService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    console.log(this.bmiService.calBMI(123, 45));
    this.httpService.getApi<User[]>('http://localhost/ng_test_api/users').subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('finish');
      }
    )
  }

  abcClick() {
    this.abcButtonClick.emit('abc Button Click!!');
  }

}
