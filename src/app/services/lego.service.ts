import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Lego } from '../models/lego';

@Injectable({
  providedIn: 'root'
})
export class LegoService {
  http: HttpClient;
  legoArray: Lego[] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  getAllLego() {
    return this.http.get<Lego[]>("http://localhost:3000/lego");
  }

  createLego(newLego: Lego) {
    return this.http.post<Lego[]>("http://localhost:3000/lego", newLego);
  }
}
