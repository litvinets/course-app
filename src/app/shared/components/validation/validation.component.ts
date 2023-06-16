import { Component, Input } from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { ValidationPatterns } from '@app/shared';

@Component({
  selector: "app-validation",
  templateUrl: "./validation.component.html",
  styleUrls: ["./validation.component.scss"],
})
export class ValidationComponent {
  @Input() control: AbstractControl;
  @Input() patternError: ValidationPatterns;

  constructor() {}

  hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }

  get errorKey() {
    return (
      this.control && this.control.errors && Object.keys(this.control.errors)[0]
    );
  }
}
