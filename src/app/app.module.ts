import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SerchComponent } from './serch/serch.component';
import { PropertyCardComponent } from './property-card/property-card.component';

const appRoutes: Routes = [
  { path: '', component:PropertyListComponent},
  { path: 'buy', component: PropertyListComponent },
  { path: 'rent', component: PropertyListComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'add-property', component: AddPropertyComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AddPropertyComponent,
    PropertyListComponent,
    NavigationComponent,
    SerchComponent,
    PropertyCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
