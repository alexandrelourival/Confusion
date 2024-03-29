import { Component, Inject, OnInit } from '@angular/core';
import { expand, flyInOut } from '../animations/app.animation';

import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  errDishMess!: string;
  errPromotionMess!: string;
  errLeaderMess!: string;
  promotion!: Promotion;
  leader!: Leader;

  constructor(private dishservice: DishService, private promotionservice: PromotionService, private leaderservice: LeaderService, @Inject('BaseURL') public baseURL: string) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errmess => this.errDishMess = errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion, errmess => this.errPromotionMess = errmess);
    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader, errmess => this.errLeaderMess = errmess);
  }

}
