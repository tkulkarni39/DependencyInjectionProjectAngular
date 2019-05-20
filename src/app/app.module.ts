import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnyAnimalComponent } from './any-animal/any-animal.component';
import { LionComponent } from './lion/lion.component';
import { CowComponent } from './cow/cow.component';
import { ComputerComponent } from './computer/computer.component';

import { PreferredBookComponent } from './preferred-book/preferred-book.component';
import { Book } from './book';
import { LaptopService } from './laptop.service';


@NgModule({
  declarations: [
    AppComponent,
    AnimalDetailsComponent,
    AnyAnimalComponent,
    LionComponent,
    CowComponent,
    ComputerComponent,
    PreferredBookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
