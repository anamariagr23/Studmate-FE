import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserService } from 'src/app/services/user.service';
import { ROUTE_PATHS } from 'src/shared/constants/route-paths';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/services/drawer.service';
declare var handleSignout: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() openDrawerEvent = new EventEmitter<void>();

  constructor(private navigationService: NavigationService, private userService: UserService, private drawerService: DrawerService,) { };

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('details_completed');
    handleSignout();
    sessionStorage.removeItem("googleCredential");
    this.userService.clearStudentId();
    this.navigationService.navigateToWithReload(ROUTE_PATHS.LOGIN);
  }

  navigateToUsers(): void {
    this.navigationService.navigateToUsers();
  }

  navigateToPersonalProfile(): void {
    const studentId = this.userService.getStudentId();
    this.navigationService.navigateToUserProfile(studentId);
  }


  openDrawer() {
    this.drawerService.openDrawer();
  }

}
