import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";
import {FormControl, FormGroup} from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  messageForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    $('.hero__categories__all').on('click', function () {
      $('.hero__categories ul').slideToggle(400);
    });
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }
}
