import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { ROUTE_PATHS } from 'src/shared/constants/route-paths';
declare var handleSignout: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private navigationService: NavigationService) { };

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('details_completed');
    handleSignout();
    sessionStorage.removeItem("googleCredential");
    this.navigationService.navigateToWithReload(ROUTE_PATHS.LOGIN);

  }

  navigateToUsers(): void {
    this.navigationService.navigateToUsers();
  }

}
