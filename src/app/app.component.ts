import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { map, tap, switchMap, mergeMap, concatMap, toArray } from 'rxjs/operators';
import { forkJoin, from, Subject, BehaviorSubject } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rx-pratice';

  books$ = this.bookService.getBooks();
  bookSlow$ = this.bookService.getBookSlow();
  authors$ = this.authorService.getAuthors();

  subject = new Subject();
  bSubject = new BehaviorSubject<number>(100);

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.subject.subscribe(
      data => {
        console.group('Subject');
        console.log(data);
        console.groupEnd();
      }
    );

    this.dataService.data$.subscribe(
      data => {
        console.group('Data Subject');
        console.log(data);
        console.groupEnd();
      }
    );

    this.bSubject.subscribe(
      data => {
        console.group('BehaviorSubject');
        console.log(data);
        console.groupEnd();
      }
    );
  }


  go() {
    // this.rxMap();
    // this.rxSwitchMap();
    // this.rxForkJoin();
    // this.rxMergeMap();

    // Subject:
    this.subject.next(2);

    this.dataService.dataNext(100);
    this.bSubject.next(1234);
  }

  rxMap() {
    // this.bookService.getBooks().pipe(
    //   map(books => books.map(book => book.name))
    // ).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );

    this.bookService.getBook(1).pipe(
      tap(book => console.log(book)),
      map(book => book.name),
      tap(book => console.log(book)),
    ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  rxSwitchMap() {
    this.bookService.getBook(1).pipe(
      map(book => book.id),
      switchMap(book => this.authorService.getAuthor(book))
    ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  rxForkJoin() {
    forkJoin(
      this.books$,
      this.bookSlow$,
      this.authors$,
    ).subscribe(
      data => {
        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);
      }
    );
  }

  rxMergeMap() {
    from([1, 2, 3]).pipe(
      mergeMap(x => this.bookService.getBook(x)),
      tap(book => console.log(book)),
      toArray(),
      tap(books => console.log(books))
    ).subscribe();
  }

  getBook(id: number) {
    this.bookService.getBook(id).pipe(
      switchMap(book => from(book.authors).pipe(
        mergeMap(authorId => this.authorService.getAuthor(authorId)),
        toArray(),
        map(authors => {
          return {
            ...book,
            authors
          };
        })
      )),
    ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getBooks() {

  }

}
