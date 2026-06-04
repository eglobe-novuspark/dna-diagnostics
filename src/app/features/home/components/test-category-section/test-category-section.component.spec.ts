import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCategorySectionComponent } from './test-category-section.component';

describe('TestCategorySectionComponent', () => {
  let component: TestCategorySectionComponent;
  let fixture: ComponentFixture<TestCategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCategorySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
