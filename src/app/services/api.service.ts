import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMangaByTitle(title: string) {
    return new Promise((res, rej) => {
      this.http
        .get('http://localhost:8080/searchmanga/' + title)
        .subscribe((x) => res(x));
    });
  }
}
