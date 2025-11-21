import { Component, Input, inject, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { WeatherResponse } from '../../models/weather.interface';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css'],
})
export class UserCard implements OnInit {
  @Input() user!: User;
  weather: WeatherResponse | null = null;
  private weatherService = inject(WeatherService);

  ngOnInit() {
    if (this.user) {
      const lat = Number(this.user.location.coordinates.latitude);
      const lon = Number(this.user.location.coordinates.longitude);

      this.weatherService.getWeather(lat, lon).subscribe((data) => {
        this.weather = data;
      });
    }
  }

  get currentTemp(): number | string {
    if (!this.weather?.current_weather) {
      return '-';
    }
    return this.weather.current_weather.temperature;
  }

  get minTemp(): number | string {
    if (!this.weather?.daily?.temperature_2m_min) return '-';
    return this.weather.daily.temperature_2m_min[0];
  }

  get maxTemp(): number | string {
    if (!this.weather?.daily?.temperature_2m_max) return '-';
    return this.weather.daily.temperature_2m_max[0];
  }


  get weatherIcon(): string {
  const temp = this.weather?.current_weather?.temperature;

    if (temp === undefined || temp === null) return '';

    if (temp < 0) {
      return 'https://cdn-icons-png.flaticon.com/512/2315/2315309.png';
    }

    if (temp >= 0 && temp <= 15) {
      return 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png';
    }

    return 'https://cdn-icons-png.flaticon.com/512/869/869869.png';
  }
}

