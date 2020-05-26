import { Directive, DoCheck, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: 'td'
})
export class SetColorDirective {
  @HostBinding('class')
  bgColor: string = '';

  public setColor(isSet: boolean): void {
    this.bgColor = isSet ? 'dark' : 'light'
  }
}
