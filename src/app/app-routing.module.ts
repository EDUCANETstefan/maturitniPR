import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ForumComponent} from "./forum/forum.component";
import {ClankyComponent} from "./clanky/clanky.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'clanky', component: ClankyComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
