import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-version-control-logs',
  templateUrl: './version-control-logs.component.html',
  styleUrls: ['./version-control-logs.component.scss']
})
export class VersionControlLogsComponent implements OnInit {

  _vName: string;

  @Input() 
  get vName(){
    return this._vName;
  };

  set vName(name: string) {
    if (!name) return;
    if (!this._vName) {
      this.logs.push(`versão inicial é ${name.trim()}`);
    } else {
      this.logs.push(`versão alterada para ${name.trim()}`)
    }
    this._vName = name;
  }

  logs: string[] = [];

  constructor() { 
    this._vName = '';
  }

  ngOnInit(): void {
  }

}
