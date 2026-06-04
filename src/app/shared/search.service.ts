import { Injectable } from '@angular/core';
import { TESTS_MOCK } from '../features/tests/data/tests.mock';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private tests = TESTS_MOCK;

  searchTests(keyword: string) {

    if (!keyword.trim()) {
      return [];
    }

    return this.tests.filter((test:any) =>
      test.title.toLowerCase().includes(keyword.toLowerCase())
    ).slice(0, 6);

  }
  constructor() { }
}
