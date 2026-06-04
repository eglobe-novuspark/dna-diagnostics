import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTestSectionComponent } from './featured-test-section.component';

describe('FeaturedTestSectionComponent', () => {
  let component: FeaturedTestSectionComponent;
  let fixture: ComponentFixture<FeaturedTestSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTestSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedTestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
