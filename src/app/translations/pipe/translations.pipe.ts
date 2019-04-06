import { Pipe, PipeTransform } from '@angular/core';
import { TranslationsService } from '../service/translations.service'; // our translate service

@Pipe({
  name: 'translate',
  pure: false // impure pipe allows updating value when we change language
})
export class TranslationsPipe implements PipeTransform {

  constructor(private translate: TranslationsService) { }

  transform(value: string, args: any[]): any {
    if (!value) {
      return;
    }
    return this.translate.instant(value);
  }

}
