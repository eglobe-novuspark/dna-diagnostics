import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// No NgxPaginationModule

import { TestService } from '../../services/test.service';
import { Test } from '../../models/test.interface';
import { TestToolbarComponent } from '../../components/test-toolbar/test-toolbar.component';
import { TestGridComponent } from '../../components/test-grid/test-grid.component';
import { TestFilterSidebarComponent } from '../../components/test-filter-sidebar/test-filter-sidebar.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-test-list-page',
  standalone: true,
  imports: [
    CommonModule,
    TestGridComponent,
    TestFilterSidebarComponent,
    PaginationComponent   // our clean pagination component
  ],
  templateUrl: './test-list-page.component.html',
  styleUrls: ['./test-list-page.component.scss']
})
export class TestListPageComponent implements OnInit {
  allTests: Test[] = [];          // full dataset
  currentPage = 1;
  itemsPerPage = 12;               // set to 2 so we have 2 pages with 4 items
  filteredTests: Test[] = [];

  constructor(private testService: TestService) {}

  ngOnInit() {
  this.testService.getTests().subscribe(data => {

    this.allTests = data.map((test, index) => ({
      ...test,
      displayCategory: test.category?.toUpperCase() || 'DNA TEST',
      discount: [35, 44, 49, 50][index % 4]
    }));

    this.filteredTests = [...this.allTests];
  });
}

  // Derived properties
  get totalResults(): number {
    return this.filteredTests.length > 0
      ? this.filteredTests.length
      : this.allTests.length;
  }

  get pagedTests(): Test[] {
  const data =
    this.filteredTests.length > 0
      ? this.filteredTests
      : this.allTests;

  const start = (this.currentPage - 1) * this.itemsPerPage;

  return data.slice(start, start + this.itemsPerPage);
}

  // Event handlers
  onPageChange(page: number) {
    this.currentPage = page;
  }

  onItemsPerPageChange(newSize: number) {
  this.itemsPerPage = newSize;
  this.currentPage = 1;    // reset to first page
}

  onSortChange(sort: string) {
    console.log('Sort changed to:', sort);
    this.currentPage = 1;   // reset to first page when sorting
    // In a real app you would sort the allTests array here
  }

  bookTest(test: Test) {
    alert(`Booking: ${test.title}`);
  }
  onPriceFilter(filter: { min: number; max: number }) {

    this.filteredTests = this.allTests.filter(test =>
      test.price >= filter.min &&
      test.price <= filter.max
    );

    this.currentPage = 1;

    console.log('Filter:', filter);
    console.log('Found:', this.filteredTests.length);
  }
  
}