import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Accordion } from 'src/app/models/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements OnInit {
  @Input() faq;
  @Input() ngClass;
  @Output() toggleFaq: EventEmitter<Accordion> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // dynamic class binding
  setClasses = () => {
    return {
      accordion: true,
      'is-open': this.faq['is-open']
    };
  }

  // event handler to run on click of faq
  OnClick = (): void => {
    this.toggleFaq.emit(this.faq);
  }
}
