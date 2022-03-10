import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Book {

}

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  basePath = `http://localhost:3000`;

  constructor(private http: HttpClient) { }


  getBooks(): Observable<Array<Book>> {
    return this.http.get<Book[]>(`${this.basePath}/book`);
  }

}
