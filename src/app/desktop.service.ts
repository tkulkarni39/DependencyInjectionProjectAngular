import { Injectable } from '@angular/core';
import { Computer } from './computer';
import { LaptopService } from './laptop.service';

@Injectable({
  providedIn: 'root'                      // Dependency per root
})
export class DesktopService implements Computer {
  public getComputerName() {
    return 'Computer';
  }
}
