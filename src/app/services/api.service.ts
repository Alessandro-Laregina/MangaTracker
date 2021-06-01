import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Config from '../../assets/configuration.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMangaByTitle(title: string) {
    return new Promise((res, rej) => {
      this.http
        .get(Config.API.getMangaByTitle + title)
        .subscribe((x) => res(x));
    });
  }

  getInfoManga(url: string) {
    return new Promise((res, rej) => {
      this.http
        .post(Config.API.getInfoManga, { link: url })
        .subscribe((x) => res(x));
    });
  }

  getEdizioni(url: string) {
    return new Promise((res, rej) => {
      this.http
        .post(Config.API.getEdizioni, { link: url })
        .subscribe((x) => res(x));
    });
  }
}
