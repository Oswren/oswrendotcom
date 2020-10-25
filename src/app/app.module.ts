// external imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// local components, modules and services imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpBirdsComponent } from './components/http-birds/http-birds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkCopyService } from './services/link-copy.service';
// material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HttpBirdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [LinkCopyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
