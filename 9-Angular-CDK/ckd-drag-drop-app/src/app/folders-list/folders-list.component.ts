import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFile, faFilePdf, faFileWord } from '@fortawesome/free-regular-svg-icons';
import { FileIconService } from '../core/file-icon.service';
import { APP_DATA } from '../data/data';
import { IntfFolder } from '../interfaces/intf-folder';

@Component({
  selector: 'app-folders-list',
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss']
})
export class FoldersListComponent implements OnInit {

  folders = APP_DATA;
  selectedFolder: IntfFolder | null = null;

  constructor(private fileIconService: FileIconService) {
    this.folders = this.folders.map((folder) => {
      return {
        ...folder,
        files: folder.files.map((file) => {
          return {
            ...file,
            icon: this.fileIconService.getFileIcon(file.name),
          }
        })
      }
    })
  }

  toggleFolderSelect(folder: IntfFolder) {
    if (folder === this.selectedFolder) {
      this.selectedFolder = null;
      return;
    }
    this.selectedFolder = folder;
  }

ngOnInit(): void {
}

}
