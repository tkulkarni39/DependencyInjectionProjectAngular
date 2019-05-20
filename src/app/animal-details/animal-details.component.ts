// Dependency injection - Loose coupling
                      // Easy to maintain
                      // Easy to test
                      // Small change will not affect the whole application
import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  name: string;
  food: string;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.name = this.animalService.getName();
    this.food = this.animalService.getFood();
  }

}
