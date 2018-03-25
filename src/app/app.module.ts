import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule, MatDialogModule, MatInputModule, MatIconModule, MatIcon } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { Person1Component } from './person-1/person-1.component';
import { Person2Component } from './person-2/person-2.component';
import { Person3Component } from './person-3/person-3.component';
import { HomeComponent } from './home/home.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { MembersComponent } from './members/members.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'f',
    component: FeaturesComponent
  },
  {
    path: 'price',
    component: PricingComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'members',
    component: MembersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PricingComponent,
    FeaturesComponent,
    LoginComponent,
    Person1Component,
    Person2Component,
    Person3Component,
    HomeComponent,
    LoginPopupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule
  ],
  entryComponents: [
    LoginPopupComponent
  ]
})
export class AppModule { }
