import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DayService } from '../day/day.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  detailData: any = [];
  subscription: Subscription;

  constructor(private dayService: DayService) { }

  ngOnInit(): void {
    this.subscription = this.dayService.daySelected.subscribe(
      data => {
        this.detailData = data.data.map(item => {
          let obj = {};
          obj["time"] = new Date(item.dt_txt);
          obj["feels_like"] = item.main.feels_like;
          obj["humidity"] = item.main.humidity;
          obj["max"] = item.main.temp_max;
          obj["min"] = item.main.temp_min;
          obj["description"] = item.weather[0].description;
          return obj;
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
