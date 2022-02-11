import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './View/landing-page/landing-page.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { SiteIdentityComponent } from './Components/site-identity/site-identity.component';
import { EstimateBoxComponent } from './Components/estimate-box/estimate-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationComponent,
    SiteIdentityComponent,
    EstimateBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
