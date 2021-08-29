import { Component } from '@angular/core';
import { SearchService } from '../services/search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'z1media-search';
  isLoading = false;
  searchValue: any;
  searchResult: any = [];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  searchData() {
    this.isLoading = true;

    console.log('loginform', this.searchValue)
    this.searchService.search(this.searchValue).subscribe(result => {
      console.log('rups:::', result)
      this.isLoading = false;
      this.searchResult = result.items
      console.log('rupa resulet:::', result.items)
    }, error => {
      this.isLoading = false;
    })
  }
}


