import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCardComponent } from '../test-card/test-card.component';
import { Test } from '../../models/test.interface';
// No NgxPaginationModule

@Component({
  selector: 'app-test-grid',
  standalone: true,
  imports: [CommonModule, TestCardComponent],
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent {
  @Input() tests: Test[] = [];    // already sliced by parent
  @Output() bookNow = new EventEmitter<Test>();

  onBookNow(test: Test) {
    this.bookNow.emit(test);
  }
}