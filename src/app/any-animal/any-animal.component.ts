import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-any-animal',
  templateUrl: './any-animal.component.html',
  styleUrls: ['./any-animal.component.css'],
  providers: [ AnimalService ]              // This is DI per component
})
export class AnyAnimalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
