import { Component, Input, OnInit } from '@angular/core';
import { faFile, faFolder } from '@fortawesome/free-regular-svg-icons';
import { IntfFile } from 'src/app/interfaces/intf-file';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() file: IntfFile = { name: '', icon: faFile };

  constructor() { }

  ngOnInit(): void {
  }

}
