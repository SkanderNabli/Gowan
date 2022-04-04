import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {PostersComponent} from "./posters/posters.component";
import {WebDesignsComponent} from "./web-designs/web-designs.component";
import {IdentiteVisuellesComponent} from "./identite-visuelles/identite-visuelles.component";
import {SingleIdentiteVisuelleComponent} from "./single-identite-visuelle/single-identite-visuelle.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Realisations/IdentiteVisuelles', component: IdentiteVisuellesComponent},
  {path:'Realisations/IdentiteVisuelles/:id', component: SingleIdentiteVisuelleComponent},
  {path:'Realisations/Posters', component: PostersComponent},
  {path:'Realisations/WebDesigns', component: WebDesignsComponent},
  {path:'Contact', component:ContactComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
