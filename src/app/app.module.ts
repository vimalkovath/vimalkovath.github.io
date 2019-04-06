import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { AngularFireModule } from '@angular/fire';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { ProvidersModule } from './providers/providers.module';
import { TranslationsModule } from './translations/translations.module';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './shared/pipes/pipes.module';
// environment global
import { environment } from '../environments/environment';
// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { DetailsComponent } from './pages/details/details.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { TermsComponent } from './pages/terms/terms.component';
// Components
import { ProfileCsComponent } from './pages/education/profile-cs/profile-cs.component';
import { ProfileComponent } from './pages/home/profile/profile.component';
import { DetailsModalComponent } from './shared/components/details-modal/details-modal.component';
import { ImgModalComponent } from './shared/components/img-modal/img-modal.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostdetailComponent } from './pages/posts/postdetail/postdetail.component';
import { PostpreviewComponent } from './pages/posts/postpreview/postpreview.component';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProvidersModule,
    TranslationsModule,
    SharedModule,
    PipesModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CookiePolicyComponent,
    DetailsComponent,
    EducationComponent,
    ExperienceComponent,
    NotFoundComponent,
    ProjectsComponent,
    SitemapComponent,
    SkillsComponent,
    TermsComponent,
    ProfileCsComponent,
    ProfileComponent,
    PostsComponent,
    PostdetailComponent,
    PostpreviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DetailsModalComponent,
    ImgModalComponent
  ]
})
export class AppModule { }
