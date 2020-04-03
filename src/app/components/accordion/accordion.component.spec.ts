import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { Accordion } from 'src/app/models/accordion';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let faqEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    faqEl = fixture.nativeElement.querySelector('.accordion');
  });

  it('should create', fakeAsync(() => {
    const fakeFaq: Accordion = {
      id: 1,
      question: 'how to pay',
      answer: 'call us',
      'is-open': false
    };

    component.faq = fakeFaq;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('setClasses should set the classes according to boolean value', fakeAsync(() => {
    const fakeFaq: Accordion = {
      id: 1,
      question: 'how to pay',
      answer: 'call us',
      'is-open': true
    };

    component.faq = fakeFaq;
    fixture.detectChanges();
    expect(component.setClasses()['is-open']).toBeTrue();
  }));
});
