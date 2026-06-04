import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEST_CATEGORIES } from '../../data/category.mock';

@Component({
  selector: 'app-featured-test-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-test-section.component.html',
  styleUrl: './featured-test-section.component.scss'
})
export class FeaturedTestSectionComponent {
featuredTests = TEST_CATEGORIES.filter(
    test => test.featured
  );
}
