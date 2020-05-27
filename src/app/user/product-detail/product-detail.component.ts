import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  currentProduct: Product;
  sub: Subscription
  relatedProducts: Product[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.currentProduct = await this.getProduct(id);
      this.currentProduct.image = await this.getAllImageByProduct(this.currentProduct);
      this.getAllProductRelated(this.currentProduct.category);
    })
  }

  ngOnInit() {
    $(document).ready(function () {
      $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      });
      $('.product__details__pic__slider img').on('click', function () {
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
          $('.product__details__pic__item--large').attr({
            src: imgurl
          });
        }
      });
      var proQty = $('.pro-qty');
      proQty.prepend('<span class="dec qtybtn">-</span>');
      proQty.append('<span class="inc qtybtn">+</span>');
      proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find('input').val(newVal);
      });
    })
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  getProduct(id: number) {
    return this.productService.getProduct(id).toPromise();
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  getAllProductRelated(category: Category) {
    this.categoryService.getAllProductByCategory(category.id).subscribe(listProduct => {
      if (listProduct.length > 4) {
        for (let i = 0; i < 4; i++) {
          this.relatedProducts.push(listProduct[i]);
        }
      } else {
        this.relatedProducts = listProduct;
      }
      this.relatedProducts.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
    })
  }
}
