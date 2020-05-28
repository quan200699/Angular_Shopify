import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";
import {FormControl, FormGroup} from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listCategory: Category[] = [];
  listProduct: Product[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  listProductSaleOff: Product[] = [];
  listProductLatest: Product[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
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
      var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
      rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
          minamount.val('$' + ui.values[0]);
          maxamount.val('$' + ui.values[1]);
        }
      });
      minamount.val('$' + rangeSlider.slider("values", 0));
      maxamount.val('$' + rangeSlider.slider("values", 1));
    });
    this.getAllCategories();
    this.getAllProduct();
    this.getAllProductSaleOff();
    this.getAllProductLatest();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
      this.addImageToProduct(this.listProduct);
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

  getAllProductSaleOff() {
    this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(listProduct => {
      this.listProductSaleOff = listProduct;
      this.listProductSaleOff.map(async product => {
        product.image = await this.getAllImageByProduct(product);
        $(document).ready(function () {
          $(".product__discount__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {
              320: {
                items: 1,
              },

              480: {
                items: 2,
              },
              768: {
                items: 3,
              }
            }
          });
        })
      })
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
      this.addImageToProduct(this.listProductLatest);
    })
  }

  addImageToProduct(listProduct: Product[]) {
    listProduct.map(async product => {
      product.image = await this.getAllImageByProduct(product);
    })
  }

  search() {
    const name = this.searchForm.value.name;
    if (name != null) {
      this.productService.getAllProductByName(name).subscribe(listProduct => {
        this.listProduct = listProduct;
        this.addImageToProduct(this.listProduct);
      })
    }
  }
}
