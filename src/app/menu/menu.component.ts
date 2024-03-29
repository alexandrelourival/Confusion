import { Component, Inject, OnInit } from '@angular/core';

import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
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
