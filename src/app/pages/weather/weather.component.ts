import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { WeatherData } from './interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  public weather!: WeatherData;
  public baseUrl = 'http://openweathermap.org/img/wn/';

  ngOnInit() {
    this.route.data.subscribe(({ weatherData }) => {
      console.log(weatherData.weather[0].main);
      this.weather = weatherData;
    });
  }
}
