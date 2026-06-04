import { Component } from '@angular/core';
import { TESTS_MOCK } from '../../data/tests.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {
   testCategoryItems = TESTS_MOCK
    .filter(test => test.popular)
    .map((test: any) => ({
      ...test,
      displayCategory: this.getDisplayCategory(test.category),
      oldPrice: test.oldPrice || Math.floor(test.price * 1.45)
    }));


  private getDisplayCategory(cat: string): string {

    switch (cat.toLowerCase()) {

      case 'dna-test':
        return 'DNA TEST';

      case 'health-test':
        return 'HEALTH TEST';

      case 'nipt-test':
        return 'NIPT TEST';

      case 'wellness-test':
        return 'WELLNESS TEST';

      default:
        return 'DNA TEST';
    }
  }
}
