import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCardSkeletonComponent } from './test-card-skeleton.component';

describe('TestCardSkeletonComponent', () => {
  let component: TestCardSkeletonComponent;
  let fixture: ComponentFixture<TestCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCardSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
