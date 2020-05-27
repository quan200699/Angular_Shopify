import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category/category.service";
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  listProduct: Product[] = [];
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  listProductLatest: Product[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      });
      $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
      });
      $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

          0: {
            items: 1,
          },

          480: {
            items: 2,
          },

          768: {
            items: 3,
          },

          992: {
            items: 4,
          }
        }
      });
    });
    this.getAllProductLatest();
    this.getAllProduct();
    this.getAllCategories();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
      this.listProduct.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
    })
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  getAllProductLatest() {
    this.productService.getAllProductLatest().subscribe(listProduct => {
      if (listProduct.length > 3) {
        for (let i = 0; i < 3; i++) {
          this.listProductLatest.push(listProduct[i]);
        }
      } else {
        this.listProductLatest = listProduct;
      }
      this.listProductLatest.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
    })
  }
}
