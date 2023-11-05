import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

  constructor(private spinner:NgxSpinnerService) { }

  showSpinner(spinnerNameType:SpinnerType){
    this.spinner.show(spinnerNameType);

    setTimeout(()=>this.spinner.hide(spinnerNameType),2000);
  }

  hideSpinner(spinnerNameType:SpinnerType){
    this.spinner.hide(spinnerNameType);
  }


}

export enum SpinnerType{
  BallScaleMultiple="s1",
  BallAtom="s2",
  BallSpinClockwiseFadeRotating="s3"
}
