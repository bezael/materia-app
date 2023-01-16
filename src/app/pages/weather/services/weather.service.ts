import { enviroment } from 'src/enviroment/environment';
import { Subject } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { WeatherData } from '../interfaces/weather.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);
  weatherData$ = new Subject<WeatherData>();

  constructor() {
    this.getWeatherByName();
  }

  setData(data: WeatherData): void {
    this.weatherData$.next(data);
  }

  getWeatherByName(city = 'barcelona'): void {
    this.http
      .get<WeatherData>(`${enviroment.api}?q=${city}`)
      .subscribe((value: WeatherData) => {
        this.setData(value);
      });
  }
}
