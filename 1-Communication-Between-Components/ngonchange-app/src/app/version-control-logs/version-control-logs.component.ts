import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-control-logs',
  templateUrl: './version-control-logs.component.html',
  styleUrls: ['./version-control-logs.component.scss']
})
export class VersionControlLogsComponent implements OnInit, OnChanges {

  @Input() vName: string = '';

  logs: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const currValue: string = changes.vName.currentValue;
    if (changes.vName.isFirstChange()) {
      this.logs.push(`versão inicial é ${currValue.trim()}`);
    } else {
      this.logs.push(`versão atualizada para ${currValue.trim()}`)
    }
  }

  ngOnInit(): void {
  }

}
