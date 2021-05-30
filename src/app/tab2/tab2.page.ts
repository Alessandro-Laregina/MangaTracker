import { Component } from '@angular/core';
import { TitleSearchedInterface } from '../interface/search-interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private apiService: ApiService) {}

  results: TitleSearchedInterface[];

  isSearchedEvent: boolean = false;

  ngAfterViewInit() {}

  searchByTile(input: any) {
    let title = input.value;

    if (title && title != '')
      this.apiService
        .getMangaByTitle(title)
        .then((res: TitleSearchedInterface[]) => {
          this.isSearchedEvent = true;
          this.results = res;
        });
  }

  showOnlyManga(results: TitleSearchedInterface[]): TitleSearchedInterface[] {
    let filter = results.filter((x) => x.tipo_opera == 'Fumetto');
    return filter;
  }
}
