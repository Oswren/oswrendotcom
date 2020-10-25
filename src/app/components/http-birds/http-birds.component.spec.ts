import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpBirdsComponent } from './http-birds.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

describe('HttpBirdsComponent', () => {
  let component: HttpBirdsComponent;
  let fixture: ComponentFixture<HttpBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpBirdsComponent ],
      imports: [
        MatSnackBarModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule
      ]
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
