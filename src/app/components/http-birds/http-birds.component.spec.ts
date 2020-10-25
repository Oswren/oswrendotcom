import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpBirdsComponent } from './http-birds.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('HttpBirdsComponent', () => {
  let component: HttpBirdsComponent;
  let fixture: ComponentFixture<HttpBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpBirdsComponent ],
      imports: [MatSnackBarModule]
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
