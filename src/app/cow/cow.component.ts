import { Component, OnInit } from '@angular/core';
import { CowService } from '../cow.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css'],
  providers: [{ provide: AnimalService, useClass: CowService }]
})
export class CowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
