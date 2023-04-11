import { Component, 
          Input, 
          ViewChild, 
          ElementRef, 
          ContentChild, 
          OnInit, 
          ViewEncapsulation, 
          OnChanges, 
          SimpleChanges, 
          DoCheck,
          OnDestroy,
          AfterContentChecked,
          AfterContentInit,
          AfterViewInit,
          AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, 
                                               OnChanges, 
                                               DoCheck, 
                                               OnDestroy, 
                                               AfterContentInit,
                                               AfterContentChecked,
                                               AfterViewInit,
                                               AfterViewChecked,
                                               OnDestroy{
  @Input() server : {
    type: string,
    name: string, 
    content: string
  }

  @Input() name : string;

  @ViewChild('heading', { static: true }) header: ElementRef;

  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of [paragraph]: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!");
    console.log(changes);
    
  }


  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of [paragraph]: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
