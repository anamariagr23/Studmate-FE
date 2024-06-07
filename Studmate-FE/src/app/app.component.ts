import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer?: MatSidenav;
  title = 'Studmate-FE';

  constructor(public drawerService: DrawerService) { }

  ngOnInit() {
    this.drawerService.drawerState$.subscribe(isOpen => {
      if (isOpen) {
        this.drawer?.open();
      } else {
        this.drawer?.close();
      }
    });
  }

}
