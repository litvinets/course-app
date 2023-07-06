import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { dataURLtoFile } from '@app/shared/components/files-upload/utils/file';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent {
  @Input() imageFile: File;

  @Output() changed = new EventEmitter<File>();

  croppedImage: string;

  onCrop(): void {
    const file: File = dataURLtoFile(this.croppedImage, this.imageFile.name);
    this.changed.emit(file);
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }
}
