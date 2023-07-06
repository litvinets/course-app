import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilesUploadComponent } from '@app/shared/components/files-upload/files-upload.component';

@Directive({
  selector: '[appFilesUpload]',
})
export class FilesUploadDirective {
  @Input() multiple: boolean;
  @Input() crop: boolean;

  @Output() changed = new EventEmitter<string | string[]>();

  constructor(private dialog: MatDialog) {
  }

  @HostListener('click', ['$event']) onClick(): void {
    this.openDialog();
  }

  private openDialog(): void {
    const dialogModal = this.dialog.open(FilesUploadComponent, {
      width: '500px',
      height: '550px',
      data: {
        crop: this.crop,
        multiple: this.multiple
      }
    });
    dialogModal
      .afterClosed()
      .subscribe((result: string | string[]) => this.changed.emit(result || null));
  }
}
