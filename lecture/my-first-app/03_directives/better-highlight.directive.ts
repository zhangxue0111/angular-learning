import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor : string;
  
  constructor(private renderer : Renderer2, private elementRef : ElementRef) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  
  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }


}
