import { Component, Inject, OnInit } from '@angular/core';

import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!: Dish[];
  errMess!: string;

  constructor(private dishservice: DishService, @Inject('BaseURL') public baseURL: string) {
  }

  ngOnInit(): void {
    this.dishservice.getDishes().subscribe(dishes => this.dishes = dishes, errmess => this.errMess = <any>errmess);
  }

}
