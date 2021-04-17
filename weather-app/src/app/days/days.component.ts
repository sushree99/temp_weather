import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { DaysService } from './days.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  groupedDataArr = [];

  constructor(private daysService: DaysService) { }

  ngOnInit(): void {
    this.daysService.getWeatherData().subscribe(
      data => {
        let groupedData = _.groupBy(data.list, (item) => {
          return new Date(item.dt_txt).getDate();
        });
        for (let key in groupedData) {
          let obj = {};
          obj["data"] = groupedData[key];
          this.groupedDataArr.push(obj);
        }
      }
    );
  }

}
