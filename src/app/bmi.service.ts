import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  constructor() { }

  calBMI(height: number, weight: number): number {
    return weight / Math.pow(height / 100, 2);
  }
}
