import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent} from "./Components/heroesList/heroesList.component";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {HeroDetailComponent} from "./Components/heroesList/hero-detail/hero-detail.component";

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: "full"},
  {path: 'heroes', component: HeroesListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
