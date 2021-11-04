import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgSetsComponent } from './mtg-sets.component';

describe('MtgSetsComponent', () => {
  let component: MtgSetsComponent;
  let fixture: ComponentFixture<MtgSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
