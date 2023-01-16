import { WeatherInterceptor } from './interceptors/weather.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, WeatherRoutingModule],
  exports: [WeatherComponent],
  declarations: [WeatherComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true },
  ],
})
export class WeatherModule {}
