import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {  TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngTranTest';

constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'zh-tw']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('zh-tw');
  }

}
