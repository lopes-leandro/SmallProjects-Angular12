import { Component, Input, OnInit } from '@angular/core';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { IntfFolder } from 'src/app/interfaces/intf-folder';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() folder: IntfFolder | null = null;
  
  folderIcon = faFolder;

  constructor() { }

  ngOnInit(): void {
  }

}
