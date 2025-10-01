import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [DashboardComponent],
})
export class App {
  protected title = 'dashboard';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.registerFontClassAlias(
      'material-symbols-outlined-rounded',
      'material-symbols-outlined-rounded'
    );
  }
}
