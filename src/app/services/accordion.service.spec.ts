import { TestBed, fakeAsync } from '@angular/core/testing';

import { AccordionService } from './accordion.service';
import { HttpClientModule } from '@angular/common/http';
import { Accordion } from '../models/accordion';
import { of } from 'rxjs';

describe('AccordionService', () => {
  let service: AccordionService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    // createfake httpClient object
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AccordionService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchFaqs should get faqs', () => {
    const expectedFaqs: any[] = [ {
      id: 1,
      question: 'how to pay',
      answer: 'call us',
    }];
    // giving return value which is observable
    httpClientSpy.get.and.returnValue(of(expectedFaqs));

    service.fetchFaqs().subscribe(
      faqs => expect(faqs).toEqual(expectedFaqs, 'expected faqs'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
