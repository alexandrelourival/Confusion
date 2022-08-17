import { Component, OnInit} from '@angular/core';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish | undefined;

  constructor(private dishservice: DishService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id.toString());
  }

  goBack(): void {
    this.location.back();
  }

}
