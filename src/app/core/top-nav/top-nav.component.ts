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

  routing = Constants.routing;
  constructor(private translate: TranslateService,
              private config: ConfigurationService,

  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.languages = this.getLanguages();
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

  switchLanguage(language: string){
    this.translate.use(language);
  }



}
