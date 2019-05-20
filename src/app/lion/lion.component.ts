import { Component, OnInit } from '@angular/core';
import { LionService } from '../lion.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-lion',
  templateUrl: './lion.component.html',
  styleUrls: ['./lion.component.css'],
  providers: [ { provide: AnimalService, useClass: LionService }]     //DI per component
})
export class LionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
