import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AccordionContainerComponent } from './accordion-container.component';
import { Accordion } from 'src/app/models/accordion';
import { HttpClientModule } from '@angular/common/http';
import { AccordionService } from 'src/app/services/accordion.service';
import { of } from 'rxjs';

describe('AccordionContainerComponent', () => {
  let component: AccordionContainerComponent;
  let fixture: ComponentFixture<AccordionContainerComponent>;
  let getFaqsSpy;
  let faqsEl;

  beforeEach(async(() => {
    const fakeFaqs: Accordion[] = [ {
      id: 1,
      question: 'how to pay',
      answer: 'call us',
      'is-open': false
    }];
    // Create a fake TwainService object with a `getQuote()` spy
    const fakeService = jasmine.createSpyObj('AccordionService', ['fetchFaqs']);
  // Make the spy return a synchronous Observable with the test data
    getFaqsSpy = fakeService.fetchFaqs.and.returnValue( of(fakeFaqs) );

    TestBed.configureTestingModule({
      declarations: [ AccordionContainerComponent ],
      imports: [HttpClientModule],
      providers:    [
        { provide: AccordionService, useValue: fakeService }
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionContainerComponent);
    component = fixture.componentInstance;
    faqsEl = fixture.nativeElement.querySelector('.accordion');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show faqs after component initialized', () => {
    // sync spy result shows testQuote immediately after init
    expect(getFaqsSpy.calls.any()).toBe(true, 'fetchFaqs called');
  });

  it('toggleFaq should toggle the faq', fakeAsync(() => {
      const fakeFaq: Accordion = {
        id: 1,
        question: 'how to pay',
        answer: 'call us',
        'is-open': false
      };

      fixture.detectChanges(); // onInit()

  // sync spy result shows faqs immediately after init
      component.toggleFaq(fakeFaq);
      expect(component.faqs[0]['is-open']).toBeTrue();
  }));
});

