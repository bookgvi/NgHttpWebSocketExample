import {
  AfterContentInit,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Input, OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { SetColorDirective } from './set-color.directive';
import { Product } from '../Model/Product';

@Directive({
  selector: '[draw-cells-bg]'
})
export class DrawCellsBgDirective implements AfterContentInit {
  constructor(private el: ElementRef) {
  }

  @Input('draw-cells-bg')
  products: Product[];

  @ContentChildren(SetColorDirective, { descendants: true })
  cells: QueryList<SetColorDirective>;

  ngOnChanges(change: {[props: string]: SimpleChanges}) {
    setTimeout(() => {
      if (this.cells) {
        this.cells.forEach((el: SetColorDirective, index: number) => {
          !(index % 2) ? el.setColor(true) : '';
        })
      }
    }, 0);
  }

  ngAfterContentInit(): void {
  }

}
