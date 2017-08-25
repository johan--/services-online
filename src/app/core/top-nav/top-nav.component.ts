import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../constants';
import {TranslateService} from '@ngx-translate/core';
import {ConfigurationService} from '../../config/configuration.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  languages = [];
  configLanguage = null;

  routing = Constants.routing;
  constructor(private translate: TranslateService,
              private config: ConfigurationService,

  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.languages = this.getLanguages();
  }

  /*set language(lang: string) {
    this.settings.language = lang === 'null' ? null : lang;
    if (this.settings.language) {
      console.log('this.settings.language', this.settings.language);
      this.translate.use(this.settings.language);
    } else {
      this.translate.use(this.config.getAutoConfiguredLanguage());
    }
    this.settings.persist();
  }*/

  get language() {
    if (this.configLanguage === null) {
      return 'null';
    }
    return this.configLanguage;
  }

  getLanguages() {
    const languages = [];
    for (const langCode in this.config.languages) {
      if (!this.config.languages.hasOwnProperty(langCode)) {
        continue;
      }
      languages.push({
        id: langCode,
        name: this.config.languages[langCode]
      });
    }
    return languages;
  }

  switchLanguage(language: string) {
    console.log('language', language);
    this.translate.use(language);
  }



}
