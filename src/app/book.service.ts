import { Injectable } from '@angular/core';
import { Book } from './book';

const BOOKS: Book[] = [
    {name: 'Sherlock Holmes: Study in Scarlet'},
    {name: 'Count of Monte Cristo'},
    {name: 'Atlas shrugged'},
    {name: 'Inferno'},
    {name: 'Da Vinci code'},
    {name: 'Angels and Demons'},
    {name: 'Two States'},
];

@Injectable({
        providedIn: 'root'
})
export class BookService {
  getAllBooks(): Book[] {
    return BOOKS;
  }
}
