import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accordion } from '../models/accordion';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor(private http: HttpClient) { }

  fetchFaqs = (): Observable<Accordion[]> => {
    return this.http.get<Accordion[]>('../../assets/faqs.json');
  }

}
