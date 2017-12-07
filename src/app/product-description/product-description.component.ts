import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getAlbum(1)
    // .subscribe(
    //   data => console.log('success: ', data),
    //   err => console.log('error: ', err)
    // );
  }
}
