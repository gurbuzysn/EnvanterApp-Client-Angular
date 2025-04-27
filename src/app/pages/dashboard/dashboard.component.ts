import { Component, OnInit } from '@angular/core';
import { BlankComponent } from 'src/app/layouts/blank/blank.component';
import { HeaderComponent } from 'src/app/layouts/full/header/header.component';
import { SidebarComponent } from 'src/app/layouts/full/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports:[
    BlankComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class DashboardComponent{
 
}
