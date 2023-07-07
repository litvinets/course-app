import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileItem, FilesUploadData } from '@app/shared/models';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {
  isHovered = false;
  files: File[] = [];
  imageFile: File;
  isError: boolean;
  fileItems: FileItem[] = [];

  constructor(
    private dialogRef: MatDialogRef<FilesUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilesUploadData) {
  }

  ngOnInit(): void {
  }

  onDrop(files: FileList): void {
    //only for one file the cropper can be displayed
    this.isError = this.data.crop && (files.length > 1);

    if (!this.isError) {

      //display cropper for 1 file
      if (this.data.crop && files.length === 1 && files.item(0).type.split('/')[0] === 'image') {
        this.imageFile = files.item(0);
        return;
      }

      //save multiple files, do not display cropper
      for (let i = 0; i < files.length; i++) {
        this.files.push(files.item(i));
      }
    }
  }

  onUploadComplete(name: string, url: string): void {
    this.fileItems.push({name,url});
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onComplete(): void {
    const data = this.data.multiple ? this.fileItems : this.fileItems[0];
    this.dialogRef.close(data);
  }

  onCrop(file: File): void {
    this.imageFile = null;
    this.files.push(file);
  }
}
