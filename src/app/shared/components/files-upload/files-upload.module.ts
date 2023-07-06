import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadDirective } from './directives/files-upload.directive';
import { FilesUploadComponent } from '@app/shared/components/files-upload/files-upload.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FlexModule } from '@angular/flex-layout';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { UploadComponent } from './components/upload/upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FileSizePipe } from '@app/shared/components/files-upload/pipes/file-size.pipe';
import { CropperComponent } from './components/cropper/cropper.component';

@NgModule({
  declarations: [
    FilesUploadDirective,
    FilesUploadComponent,
    DropZoneDirective,
    UploadComponent,
    FileSizePipe,
    CropperComponent
  ],
  exports: [
    FilesUploadDirective,
    MatButtonModule
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ImageCropperModule,
    FlexModule,
    MatProgressBarModule,
    RouterModule
  ],
})
export class FilesUploadModule {
}
