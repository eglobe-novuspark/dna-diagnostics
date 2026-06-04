import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// Remove NgxPaginationModule

@Component({
  selector: 'app-test-toolbar',
  standalone: true,
  imports: [CommonModule],   // No NgxPaginationModule
  templateUrl: './test-toolbar.component.html',
  styleUrls: ['./test-toolbar.component.scss']
})
export class TestToolbarComponent {
  @Input() totalResults: number = 0;
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 3;

  @Output() sortChange = new EventEmitter<string>();
  // No pageChange output – pagination is now handled by the parent's <app-pagination>

  onSortChange(event: any) {
    this.sortChange.emit(event.target.value);
  }

  getShowingText(): string {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.totalResults);
    return `Showing ${start}–${end} of ${this.totalResults} results`;
  }
}