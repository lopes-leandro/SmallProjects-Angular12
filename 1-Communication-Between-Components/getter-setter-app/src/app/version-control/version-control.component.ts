import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss']
})
export class VersionControlComponent implements OnInit {

  public name: string = '';
  @Output() vName: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    if (!this.name.trim()) return;
    this.vName.emit(this.name.trim());
  }

}
