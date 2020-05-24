import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {Image} from "../../model/image";
import {Subscription} from "rxjs";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {
  currentProduct: Product;
  listImage: Image[];
  sub: Subscription;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentProduct = await this.getProduct(this.id);
      this.getAllImageByProduct(this.currentProduct);
    })
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.getProduct(id).toPromise();
  }

  getAllImageByProduct(product: Product) {
    this.productService.getAllImageByProduct(product.id).subscribe(listImage => {
      this.listImage = listImage;
    })
  }
}
