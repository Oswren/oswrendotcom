import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpBirdsComponent } from './http-birds.component';

describe('HttpBirdsComponent', () => {
  let component: HttpBirdsComponent;
  let fixture: ComponentFixture<HttpBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
