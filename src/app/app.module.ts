import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
