import { WeatherService } from './services/weather.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public weather$!: Observable<WeatherData>;
  constructor(private readonly weatherSvc: WeatherService) {}

  ngOnInit() {
    this.weather$ = this.weatherSvc.weatherData$;
  }
}
