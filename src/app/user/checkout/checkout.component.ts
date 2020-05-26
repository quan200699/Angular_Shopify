import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";

declare var $: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
      });
    })
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }
}
