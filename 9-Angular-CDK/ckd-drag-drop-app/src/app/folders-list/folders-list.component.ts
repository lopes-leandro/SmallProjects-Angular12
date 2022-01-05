import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFile, faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons';
import { APP_DATA } from '../data/data';
import { IntfFolder } from '../interfaces/intf-folder';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss']
})
export class FoldersListComponent implements OnInit {

  folders = APP_DATA;
  selectedFolder: IntfFolder | unknown = null;

  constructor() {
    this.folders = this.folders.map((folder) => {
      return {
        ...folder,
        files: folder.files.map((file) => {
          return {
            ...file,
            icon: this.getFileIcon(file.name)
          }
        })
      }
    })
  }

  private getFileIcon(fileName: string): IconDefinition {
    let extension = (fileName.substring(fileName.indexOf('.')));

    switch (extension) {
      case '.txt':
        return faFileWord;
      case '.pdf':
        return faFilePdf;
      default:
        return faFile;
    }
  }

ngOnInit(): void {
}

}
