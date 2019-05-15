import { Candidate } from './../model/candidate.model';
import { HttpService } from './../http/http.service';
import { BmiService } from './../bmi.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  @Output() abcButtonClick: EventEmitter<string> = new EventEmitter<string>();
  candidates: Candidate[] = [];
  candidate$: Observable<Candidate[]>;
  constructor(
    private bmiService: BmiService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    console.log(this.bmiService.calBMI(123, 45));
    this.candidate$ = this.httpService.getApi<Candidate[]>('candidates');

    this.httpService
      .getApi<Candidate[]>('candidates')
      .subscribe(
        data => {
          this.candidates = data;
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
