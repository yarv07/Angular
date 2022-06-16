import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }

  getRates(base:string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`https://api.apilayer.com/fixer/latest?symbols=UAH,USD,EUR&base=${base}&apikey=AvcX0ALt9UNim1eAhU5fNUYiDQddTLBO`)
  }
  
  
}
