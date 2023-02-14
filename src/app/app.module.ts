import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CanActiveGuard } from './Auth Guard/can-active.guard';
import{ConfirmationPopoverModule} from 'angular-confirmation-popover'

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    MasterComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),
  ],
  providers: [CanActiveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
