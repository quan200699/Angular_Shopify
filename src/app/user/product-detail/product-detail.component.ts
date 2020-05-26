import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";

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

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }
}
