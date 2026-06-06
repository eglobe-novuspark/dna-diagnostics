import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentOptionsComponent } from './shipment-options.component';

describe('ShipmentOptionsComponent', () => {
  let component: ShipmentOptionsComponent;
  let fixture: ComponentFixture<ShipmentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipmentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
