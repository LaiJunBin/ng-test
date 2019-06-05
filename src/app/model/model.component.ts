import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';


import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  states = ['A', 'B', 'C'];

  userForm = new FormGroup({
    name: new FormControl()
  });

  teacherForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      // address: this.fb.group(new Address('a', 'b')),
    });
    this.setAddresses([new Address('1'), new Address('2')])
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.teacherForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.teacherForm.get('secretLairs') as FormArray;
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address((this.secretLairs.length + 1).toString())));
  }

  // ngOnInit() {
  //   this.userForm.controls.name.valueChanges
  //   .pipe(
  //     debounceTime(500)
  //   )
  //   .subscribe(data => {
  //     console.log(data);
  //   });
  // }

}


export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
  constructor(street?: string, city?: string, state?: string, zip?: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}

export class Teacher {
  id = 0;
  name = '';
  addresses: Address[];
}
