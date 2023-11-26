import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent} from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent{
  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService){
    super(spinner)
  }
  ngOnInit(): void {
  
  }


  @ViewChild(ListComponent) listComponent:ListComponent

  createdProduct($event){
    this.listComponent.getProducts()
  }


  

}
