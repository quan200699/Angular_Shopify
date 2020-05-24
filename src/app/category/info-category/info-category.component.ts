import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {Product} from "../../model/product";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CategoryService} from "../../service/category/category.service";

declare var $: any;

@Component({
  selector: 'app-info-category',
  templateUrl: './info-category.component.html',
  styleUrls: ['./info-category.component.css']
})
export class InfoCategoryComponent implements OnInit {
  currentCategory: Category;
  listProduct: Product[];
  sub: Subscription;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentCategory = await this.getCategory(this.id);
      this.getAllProductByCategory(this.currentCategory);
    })
  }

  ngOnInit() {
  }

  getCategory(id: number) {
    return this.categoryService.getCategory(id).toPromise();
  }

  getAllProductByCategory(category: Category) {
    this.categoryService.getAllProductByCategory(category.id).subscribe(listProduct => {
      this.listProduct = listProduct;
      $(function () {
        $('#table-product').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
        });
      });
    })
  }
}
