import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ETradeClient';

  constructor(private toastrService:CustomToastrService){
    toastrService.message("Hello World","Rais",{messageType:ToastrMessageType.Info,position:ToastrPosition.BottomFullWidth})
  }
  
}

