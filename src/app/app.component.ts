import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atomiton-website';
  constructor(private _router: Router) {
  //   _router.events.subscribe((val) => {
  //     // see also 
  //     if (val instanceof NavigationEnd) {
  //       console.log('value', val);
  //     }
  // });
  }
}
