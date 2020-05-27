import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category/category.service";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product/product.service";
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {Item} from "../../product/item";
import {Product} from "../../model/product";

declare var $: any;

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  items: Item[] = [];

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
      });
      var proQty = $('.pro-qty');
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
    this.activatedRoute.params.subscribe(async params => {
      var id = params['id'];
      if (id) {
        const product = await this.getProduct(id);
        product.image = await this.getAllImageByProduct(product)
        var item: Item = {
          product: product,
          quantity: 1
        };
        if (localStorage.getItem('heart') == null) {
          let heart: any = [];
          heart.push(JSON.stringify(item));
          localStorage.setItem('heart', JSON.stringify(heart));
        } else {
          this.addProductToFavorite(id, item);
        }
        this.loadFavorite();
      } else {
        this.loadFavorite();
      }
    });
  }

  remove(id: number): void {
    let heart: any = JSON.parse(localStorage.getItem('heart'));
    let index: number = -1;
    for (var i = 0; i < heart.length; i++) {
      let item: Item = JSON.parse(heart[i]);
      if (item.product.id == id) {
        heart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("heart", JSON.stringify(heart));
    this.loadFavorite();
  }

  addProductToFavorite(id: number, item: Item) {
    let heart: any = JSON.parse(localStorage.getItem('heart'));
    let index: number = -1;
    for (var i = 0; i < heart.length; i++) {
      let item: Item = JSON.parse(heart[i]);
      if (item.product.id == id) {
        index = i;
        break;
      }
    }
    if (index == -1) {
      heart.push(JSON.stringify(item));
      localStorage.setItem('heart', JSON.stringify(heart));
    }
  }

  getProduct(id: number) {
    return this.productService.getProduct(id).toPromise();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  loadFavorite(): void {
    this.items = [];
    let heart = JSON.parse(localStorage.getItem('heart'));
    for (var i = 0; i < heart.length; i++) {
      let item = JSON.parse(heart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
    }
  }
}
