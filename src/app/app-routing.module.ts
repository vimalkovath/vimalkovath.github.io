import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { DetailsComponent } from './pages/details/details.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostdetailComponent } from './pages/posts/postdetail/postdetail.component';

const routes: Routes = [
  // default route to home on load
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // In menu
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'posts', component: PostsComponent },
  // Others
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'terms-conditions', component: TermsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'postdetail', component: PostdetailComponent },
  
  // 404
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
