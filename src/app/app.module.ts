import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftMenuComponent } from './home/left-menu/left-menu.component';
import { TopMenuComponent } from './home/top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedDataService } from "./service/shared-data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from "./home/board/board.component";
import { NgDragDropModule } from 'ng-drag-drop';
import { CardComponent } from "./home/board/card/card.component";
import { DashboardComponent } from "./home/dashboard/dashboard.component"; 
import { PlacementComponent } from "./home/board/placement/placement.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopMenuComponent,
    LeftMenuComponent,
    BoardComponent,
    CardComponent,
    DashboardComponent,
    PlacementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
      HttpModule,
      BrowserAnimationsModule,
      NgDragDropModule.forRoot()
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
