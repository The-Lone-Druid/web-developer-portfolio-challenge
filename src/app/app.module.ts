import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    HeroComponent,
    PartnersComponent,
    ProjectViewComponent,
    AboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
