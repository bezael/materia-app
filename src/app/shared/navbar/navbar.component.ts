import { RouterLink, RouterModule } from '@angular/router';
import { LogoComponent } from './../../componets/logo/logo.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { WeatherService } from 'src/app/pages/weather/services/weather.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent, SearchComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private readonly weatherSvc: WeatherService) { }

  onSearch(city: string): void {
    this.weatherSvc.getWeatherByName(city);
  }
}
