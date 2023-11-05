import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private alertifyService:AlertifyService) {
    
  }

  A(){
    this.alertifyService.message("Helloooo",{delay:4,messageType:MessageType.Warning,position:Position.BottomCenter,dismissOthers:true})
  }
  D(){
    this.alertifyService.dismissAll()
  }

}
