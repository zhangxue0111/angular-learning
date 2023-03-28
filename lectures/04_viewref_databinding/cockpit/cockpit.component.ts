import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @Output() onBlueprintAdded = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.onBlueprintAdded.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
