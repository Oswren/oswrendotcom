// external imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// local components, modules and services imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpBirdsComponent } from './components/http-birds/http-birds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkCopyService } from './services/link-copy.service';
import { MtgSetsComponent } from './components/mtg-sets/mtg-sets.component';
// material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HttpBirdsComponent,
    MtgSetsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [LinkCopyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
