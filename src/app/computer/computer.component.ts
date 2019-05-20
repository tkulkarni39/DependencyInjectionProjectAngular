import { Component, OnInit } from '@angular/core';
import { DesktopService } from '../desktop.service';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  computerName: string;
  laptopName: string;

  constructor(private computerService: DesktopService) { }

  ngOnInit() {
    this.computerName = this.computerService.getComputerName();
  }
}
