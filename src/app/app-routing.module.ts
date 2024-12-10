import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CompetenciesComponent } from './pages/competencies/competencies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { LibraryComponent } from './pages/library/library.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qui-suis-je', component: AboutComponent },
  { path: 'mes-competences', component: CompetenciesComponent },
  { path: 'mes-certifications', component: CertificationsComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
