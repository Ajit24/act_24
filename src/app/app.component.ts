import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: string = 'Home';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumb();
    });
  }

  updateBreadcrumb() {
    const currentRoute = this.router.url.split('/').pop();
    
    // Check if currentRoute is defined
    if (currentRoute) {
      this.currentPage = currentRoute.charAt(0).toUpperCase() 
                        + currentRoute.slice(1).replace('-', ' ');
    } else {
      this.currentPage = 'Home'; // Fallback if no route is found
    }
  }
}