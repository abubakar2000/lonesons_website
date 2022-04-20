import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './View/about-us/about-us.component';
import { ContactComponent } from './View/contact/contact.component';
import { LandingPageComponent } from './View/landing-page/landing-page.component';
import { NewsComponent } from './View/news/news.component';
import { ServicesComponent } from './View/services/services.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full" },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'news', component: NewsComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
