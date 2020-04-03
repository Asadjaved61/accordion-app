import { Component, OnInit } from '@angular/core';
import { Accordion } from 'src/app/models/accordion';
import { AccordionService } from 'src/app/services/accordion.service';

@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.sass']
})
export class AccordionContainerComponent implements OnInit {

  constructor(private accordionService: AccordionService) { }

  faqs: Accordion[];

  ngOnInit(): void {
    this.getFaqs();
  }

  // toggle faq value and apply class accordingly
  toggleFaq = (faqClicked: Accordion): void => {
    this.faqs.find(faq => {
      return faq.id === faqClicked.id;
    })['is-open'] = !faqClicked['is-open'];
  }
  // get faqs from the service and subscribe to observable
  getFaqs = (): void => {
    this.accordionService.fetchFaqs().subscribe((faqs: Accordion[]) => {
      this.faqs = faqs.map((faq: Accordion) => {
        return {
          ...faq,
          'is-open': false
        };
      });
    });
  }
}
