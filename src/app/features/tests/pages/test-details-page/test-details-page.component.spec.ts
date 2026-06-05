import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailsPageComponent } from './test-details-page.component';

describe('TestDetailsPageComponent', () => {
  let component: TestDetailsPageComponent;
  let fixture: ComponentFixture<TestDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
