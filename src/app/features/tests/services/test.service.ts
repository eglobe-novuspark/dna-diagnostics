import { Injectable } from '@angular/core';
import { Test } from '../models/test.interface';
import { TESTS_MOCK, TOTAL_RESULTS } from '../data/tests.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
getTests(): Observable<Test[]> {
    return of(TESTS_MOCK);
  }

  getTotalResults(): Observable<number> {
    return of(TOTAL_RESULTS);
  }
}
