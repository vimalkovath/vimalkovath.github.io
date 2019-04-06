import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Constants
import { TRANSLATION_PROVIDERS } from './constants/translation';
// Pipe
import { TranslationsPipe } from './pipe/translations.pipe';
// Service
import { TranslationsService } from './service/translations.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TranslationsPipe],
  exports: [TranslationsPipe],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslationsService,
  ]
})
export class TranslationsModule { }
