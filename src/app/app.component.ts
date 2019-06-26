import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'advance';
  books$: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }
}
