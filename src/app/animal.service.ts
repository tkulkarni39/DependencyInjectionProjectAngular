import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  name = 'Animal';
  food = 'Food';

  public getName() {
    return this.name;
  }

  public getFood() {
    return this.food;
  }
}
