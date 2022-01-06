import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFile, faFileWord } from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class FileIconService {

  constructor() { }


  getFileIcon(fileName: string): IconDefinition {
    const extension = fileName.substring(fileName.lastIndexOf('.'));
    switch (extension) {
      case '.docx':
        return faFileWord;
      default:
        return faFile;
    }
  }

}
