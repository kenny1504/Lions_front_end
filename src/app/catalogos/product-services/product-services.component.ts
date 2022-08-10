import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductAndServiceService } from '../../services/product-and-service.service';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.css']
})

export class ProductServicesComponent implements OnInit{
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  productService:any;
  isDataReady:any;
  constructor(private productAndServiceService: ProductAndServiceService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.productAndServiceService.GetProductAndServices()
      .subscribe(productService => {
        this.productService = productService;
        this.isDataReady=true;
      });

  }

}
