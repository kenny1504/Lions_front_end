import { Component, OnInit } from '@angular/core';
import { ProductAndServiceService } from '../../services/product-and-service.service';
import {LanguageApp} from "../../theme/shared/LanguageApp";

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.css']
})

export class ProductServicesComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  productService:any;
  isDataReady:any;
  constructor(private productAndServiceService: ProductAndServiceService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      language: LanguageApp.spanish_datatables
    };

    this.productAndServiceService.GetProductAndServices()
      .subscribe(productService => {
        this.productService = productService;
        this.isDataReady=true;
      });

  }

}
