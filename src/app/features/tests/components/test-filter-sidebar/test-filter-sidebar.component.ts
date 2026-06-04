// test-filter-sidebar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-filter-sidebar.component.html',
  styleUrls: ['./test-filter-sidebar.component.scss']
})
export class TestFilterSidebarComponent {
  @Output() priceChanged = new EventEmitter<{ min: number; max: number }>();

  // Configurable price range limits
  minLimit = 0;
  maxLimit = 960000;
  step = 1000;

  // Current selected price range
  minPrice = 158210;
  maxPrice = 503200;

  // Called when the minimum price slider moves
  onMinChange(): void {
    if (this.minPrice > this.maxPrice) {
      this.minPrice = this.maxPrice;
    }
    this.updateTrackBackground();
  }

  // Called when the maximum price slider moves
  onMaxChange(): void {
    if (this.maxPrice < this.minPrice) {
      this.maxPrice = this.minPrice;
    }
    this.updateTrackBackground();
  }

  // Manually update track background (ensures UI consistency)
  private updateTrackBackground(): void {
    // Force change detection for the track styles
    const trackFill = document.querySelector('.slider-range') as HTMLElement;
    if (trackFill) {
      const leftPercent = (this.minPrice / this.maxLimit) * 100;
      const rightPercent = 100 - (this.maxPrice / this.maxLimit) * 100;
      trackFill.style.left = `${leftPercent}%`;
      trackFill.style.right = `${rightPercent}%`;
    }
  }

  // Emit the selected price range to parent components
  applyFilter(): void {
    this.priceChanged.emit({
      min: this.minPrice,
      max: this.maxPrice
    });
  }

  // Format number with Indian Rupee symbol and comma separators
  formatPrice(value: number): string {
    return '₹' + value.toLocaleString('en-IN');
  }
}