import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'APM';
  public loading = true;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => this.onRouteActivated(routerEvent))
  }

  onRouteActivated(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

}
