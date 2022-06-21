import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/book';

  httpOptions = {
    Headers: new HttpHeaders({'content-type' : 'aplication/json'})
  };

  constructor(private http: HttpClient) { }

  getBook(): Observable<Book> {
    return this.http.get<Book>(this.url)
  }
}
