import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../../service/all-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private productService:AllServiceService) { }
allProducts:any
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts=function()
  {
    this.productService.getAllProducts().subscribe((response)=>{
      console.log(response)
      this.allProducts=response
    })
  }
}
