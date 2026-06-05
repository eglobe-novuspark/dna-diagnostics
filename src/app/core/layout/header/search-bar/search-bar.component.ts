import { Component } from '@angular/core';
import { SearchService } from '../../../../shared/search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
 searchText = '';
  results: any[] = [];

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.results = this.searchService.searchTests(this.searchText);
  }
  
}
