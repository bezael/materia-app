import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/environment';
import { WeatherService } from 'src/app/pages/weather/services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<unknown> {
  private readonly weatherSvc = inject(WeatherService);

  resolve(): Observable<unknown> {
    /*    const lat = '40.730610';
    const lon = '-73.935242'; */
    //api.openweathermap.org/data/2.5/forecast/daily?q=London,GB
    //    return this.http.get(`${enviroment.api}?lat=${lat}&lon=${lon}`);
    return this.weatherSvc.weatherData$;
  }
}
