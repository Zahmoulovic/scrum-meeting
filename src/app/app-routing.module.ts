import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from "./home/board/board.component";
import { DashboardComponent } from "./home/dashboard/dashboard.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/dashboard', pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'board',
                component: BoardComponent
            },
        ]
    }
  ,
  {
      path: 'login',
      component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
