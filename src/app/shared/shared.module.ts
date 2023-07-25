import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginModalModule } from "@app/shared/components/authorization/login-modal/login-modal.module";
import { FilesUploadModule } from "@app/shared/components/files-upload/files-upload.module";
import { DigitOnlyDirective } from "@app/shared/directives";

@NgModule({
  declarations: [DigitOnlyDirective],
  imports: [CommonModule, LoginModalModule, FilesUploadModule],
  exports: [FilesUploadModule, DigitOnlyDirective],
})
export class SharedModule {
}
