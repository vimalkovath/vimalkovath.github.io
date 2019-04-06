import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from './pipes/pipes.module';
import { TranslationsModule } from '../translations/translations.module';
// Components
import { CardComponent } from './components/card/card.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { PreviewComponent } from './components/preview/preview.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ImgModalComponent } from './components/img-modal/img-modal.component';
import { ListPreviewComponent } from './components/list-preview/list-preview.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    PipesModule,
    TranslationsModule
  ],
  declarations: [
    CardComponent,
    CookieBannerComponent,
    DetailsModalComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    ImgModalComponent,
    ListPreviewComponent,
    PreviewComponent
  ],
  exports: [
    CardComponent,
    CookieBannerComponent,
    DetailsModalComponent,
    FiltersComponent,
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    ImgModalComponent,
    ListPreviewComponent,
    PreviewComponent
  ]
})
export class SharedModule { }
