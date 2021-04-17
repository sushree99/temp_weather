import { Component, Input, OnInit } from '@angular/core';
import { DayService } from './day.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() dayData: any;
  daySummary: any = {};

  constructor(private dayService: DayService) { }

  ngOnInit(): void {
    let minArr = [];
    let maxArr = [];
    // Taking the median value of available temperatures in a day
    let index = Math.ceil((this.dayData.data.length - 1) / 2); 
    let iconcode = this.dayData.data[index].weather[0].icon; 
    this.daySummary["date"] = new Date(this.dayData.data[0].dt_txt);
    this.daySummary["icon"] = `http://openweathermap.org/img/w/${iconcode}.png`;
    this.dayData.data.forEach(item => {
      minArr.push(item.main.temp_min);
      maxArr.push(item.main.temp_max);
    });
    this.daySummary["min"] = Math.min(...minArr);
    this.daySummary["max"] = Math.max(...maxArr); 
  }

  onClick() {
    this.dayService.daySelected.next(this.dayData);
  }

}
