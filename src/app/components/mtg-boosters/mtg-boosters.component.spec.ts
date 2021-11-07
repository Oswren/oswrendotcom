import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgBoostersComponent } from './mtg-boosters.component';

describe('MtgBoostersComponent', () => {
  let component: MtgBoostersComponent;
  let fixture: ComponentFixture<MtgBoostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgBoostersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgBoostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
