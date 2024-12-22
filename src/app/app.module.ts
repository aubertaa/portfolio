import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { CompetenciesComponent } from './pages/competencies/competencies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { LibraryComponent } from './pages/library/library.component';
import { FormsModule } from '@angular/forms';

import { NewlineToBrPipe } from './pipes/newline-to-br.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetenciesComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AchievementsComponent,
    LibraryComponent,
    NewlineToBrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
