import { Injectable } from '@angular/core';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root',                                     // DI per root
  useFactory: (bookService: BookService) =>              // usefactory: DI property to invoke to create value for token 
    new PreferredBookService(bookService),
  deps: [ BookService ]                                   // deps cofigures the token that will be used by injector to provide
                                                          //  dependency injection required by factory method
})
export class PreferredBookService {
  constructor(private bookService: BookService) {}

  public getPreferredBooks() {
    return this.bookService.getAllBooks()
      .map(book => book.name)
      .join(' | ');
  }
}
