import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/environment';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<unknown> {
  private readonly http = inject(HttpClient);

  resolve(): Observable<unknown> {
    const lat = '40.730610';
    const lon = '-73.935242';

      return this.http.get(
        `${enviroment.api}?lat=${lat}&lon=${lon}`
      );
  }
}
