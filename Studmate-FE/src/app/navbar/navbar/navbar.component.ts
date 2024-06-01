import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var handleSignout: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { };

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('details_completed');
    handleSignout();
    sessionStorage.removeItem("googleCredential");
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });

  }

}
