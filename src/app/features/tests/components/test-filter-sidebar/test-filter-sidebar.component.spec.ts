import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFilterSidebarComponent } from './test-filter-sidebar.component';

describe('TestFilterSidebarComponent', () => {
  let component: TestFilterSidebarComponent;
  let fixture: ComponentFixture<TestFilterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFilterSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
