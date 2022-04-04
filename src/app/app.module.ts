import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RealisationsComponent } from './realisations/realisations.component';
import { IdentiteVisuelleComponent } from './identite-visuelle/identite-visuelle.component';
import { PosterComponent } from './poster/poster.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ContactComponent } from './contact/contact.component';
import { SingleIdentiteVisuelleComponent } from './single-identite-visuelle/single-identite-visuelle.component';
import { PostersComponent } from './posters/posters.component';
import { WebDesignsComponent } from './web-designs/web-designs.component';
import { IdentiteVisuellesComponent } from './identite-visuelles/identite-visuelles.component';

import { RealisasionsService } from "./services/realisasions.service";
import { AnimHomeComponent } from './anim-home/anim-home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RealisationsComponent,
    IdentiteVisuelleComponent,
    PosterComponent,
    WebDesignComponent,
    ContactComponent,
    SingleIdentiteVisuelleComponent,
    PostersComponent,
    WebDesignsComponent,
    IdentiteVisuellesComponent,
    AnimHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    RealisasionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
