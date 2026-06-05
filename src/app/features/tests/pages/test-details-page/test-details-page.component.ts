import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { TESTS_MOCK } from '../../data/tests.mock';

import { Test } from '../../models/test.interface';

@Component({
  selector: 'app-test-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-details-page.component.html',
  styleUrl: './test-details-page.component.scss'
})

export class TestDetailsPageComponent {

  test!: Test;

  selectedImage: string = '';

  quantity: number = 1;

  relatedTests: Test[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const slug =
      this.route.snapshot.paramMap.get('slug');

    const foundTest =
      TESTS_MOCK.find(
        item => item.slug === slug
      );

    if (foundTest) {

      this.test = foundTest;

      this.selectedImage =
        foundTest.images?.[0] ||
        foundTest.image;

      this.relatedTests =
        TESTS_MOCK
          .filter(
            item =>
              item.category === foundTest.category &&
              item.id !== foundTest.id
          )
          .slice(0, 8);

    }

  }

  changeImage(image: string) {

    this.selectedImage = image;

  }

  increaseQty() {

    this.quantity++;

  }

  decreaseQty() {

    if (this.quantity > 1) {

      this.quantity--;

    }

  }

}