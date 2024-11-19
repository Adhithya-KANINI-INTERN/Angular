import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'lightblue'; 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent'; 
  }
}
