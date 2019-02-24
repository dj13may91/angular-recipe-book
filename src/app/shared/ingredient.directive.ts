import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';

@Directive({selector: '[appBasicDirective]'})
export class IngredientDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor;


  @Output() currentTime = new EventEmitter<Date>();

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.currentTime.emit(new Date());
    this.backgroundColor = 'transparent';
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
