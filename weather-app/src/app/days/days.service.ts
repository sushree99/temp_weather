import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DaysService {

    constructor(private http: HttpClient) {}

    getWeatherData(): Observable<any> {
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=1277333&appid=8db2fa1210477e7b5b338c897a720c61&units=metric'); // Fetch weather data for Bengaluru in Celsius
    }
}