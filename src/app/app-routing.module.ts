import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActiveGuard } from './Auth Guard/can-active.guard';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';



const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:"dashboard",component:DashBoardComponent,
  children:[
    {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,canActivate:[CanActiveGuard]},
  {path:'master',component:MasterComponent}
]
},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
