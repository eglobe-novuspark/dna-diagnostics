import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestToolbarComponent } from './test-toolbar.component';

describe('TestToolbarComponent', () => {
  let component: TestToolbarComponent;
  let fixture: ComponentFixture<TestToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
