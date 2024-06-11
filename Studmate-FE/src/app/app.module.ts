import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from './users-page/users-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { AvatarComponent } from './avatar-page/avatar/avatar.component';
import { StudentDetailsFormComponent } from './student-details-form/student-details-form/student-details-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { LoginRedirectComponentComponent } from './login-redirect-component/login-redirect-component.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageDrawerComponent } from './message-drawer/message-drawer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutComponent } from './layout/layout.component';
import { ChatComponent } from './chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://127.0.0.1:5000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersPageComponent,
    SurveyPageComponent,
    SurveyFormComponent,
    AvatarComponent,
    StudentDetailsFormComponent,
    NavbarComponent,
    LoginRedirectComponentComponent,
    ProfileComponent,
    MessageDrawerComponent,
    LayoutComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    SocialLoginModule,
    MatSidenavModule,
    SocketIoModule.forRoot(config)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
