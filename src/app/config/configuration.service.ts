import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import 'moment/locale/de';

@Injectable()
export class ConfigurationService {

  languages = {
    en: 'English',
    de: 'German'
  };

  defaultLanguage = 'en';

  constructor(
    private translate: TranslateService
  ) {

  }

  getAutoConfiguredLanguage() {
    const browserLang = this.translate.getBrowserLang();
    if (this.languages.hasOwnProperty(browserLang)) {
      return browserLang;
    } else {
      return this.defaultLanguage;
    }
  }

}
