import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateBoxComponent } from './estimate-box.component';

describe('EstimateBoxComponent', () => {
  let component: EstimateBoxComponent;
  let fixture: ComponentFixture<EstimateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
