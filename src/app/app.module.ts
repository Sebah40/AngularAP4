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
import { MatCardModule } from '@angular/material/card';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EducationComponent,
    AboutComponent,
    SkillsComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
