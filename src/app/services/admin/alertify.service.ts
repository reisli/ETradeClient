import { Injectable, OnInit } from '@angular/core';
declare var alertify:any

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string,options:Partial<AlertifyOptions>){
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position',options.position);
    const msj=alertify[options.messageType](message);
    if(options.dismissOthers)
    msj.dismissOthers();
  }

  dismissAll(){
    alertify.dismissAll();
  }
}


export class AlertifyOptions{
  messageType:MessageType=MessageType.Message;
  position:Position=Position.BottomRight;
  delay:number=3;
  dismissOthers:boolean=false;

}

export enum MessageType{
  Success="success",
  Error="error",
  Notify="notify",
  Warning="warning",
  Message="message"
}

export enum Position{
  TopRight="top-right",
  TopLeft="top-left",
  TopCenter="top-center",
  BottomRight="bottom-right",
  BottomLeft="bottom-left",
  BottomCenter="bottom-center"
}
