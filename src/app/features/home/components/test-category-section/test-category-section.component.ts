import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TESTS_MOCK } from '../../data/tests.mock';

@Component({
  selector: 'app-test-category-section',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './test-category-section.component.html',
  styleUrl: './test-category-section.component.scss'
})
export class TestCategorySectionComponent implements OnInit{

  testCategoryItems = TESTS_MOCK.slice(0, 4).map((test, index) => ({
    ...test,
    displayCategory: this.getDisplayCategory(test.category),
    discount: [35, 44, 50, 50][index] || 40,
    oldPrice: test.oldPrice || Math.floor(test.price * 1.45)
  }));

  private getDisplayCategory(cat: string): string {

    switch (cat.toLowerCase()) {

      case 'dna-test':
        return 'DNA TEST';

      case 'health-test':
        return 'DNA AGE TEST';

      case 'nipt-test':
        return 'NIPT TEST';

      case 'wellness-test':
        return 'ANCESTRY';

      default:
        return 'DNA TEST';
    }
  }
  ngOnInit(): void {
    
  }

}