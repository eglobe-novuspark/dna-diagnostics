import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaLabSectionComponent } from './dna-lab-section.component';

describe('DnaLabSectionComponent', () => {
  let component: DnaLabSectionComponent;
  let fixture: ComponentFixture<DnaLabSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnaLabSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DnaLabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
