import { Component, OnInit } from '@angular/core';
import { PreferredBookService } from '../preferred-book.service';

@Component({
  selector: 'app-preferred-book',
  templateUrl: './preferred-book.component.html',
  styleUrls: ['./preferred-book.component.css']
})
export class PreferredBookComponent implements OnInit {
  preferredBooks: string;
  constructor(private preferredBookService: PreferredBookService) { }

  ngOnInit() {
    this.preferredBooks = this.preferredBookService.getPreferredBooks();
 }
}
