import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/aboutme/aboutme.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { CompetenciesComponent } from './pages/competencies/competencies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { LibraryComponent } from './pages/library/library.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mes-competences', component: CompetenciesComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'mon-parcours', component: ParcoursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
