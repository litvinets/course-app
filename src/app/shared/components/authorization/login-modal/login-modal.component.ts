import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { PASSWORD_REGEX } from "@app/shared/constants/regex-constants";

@Component({
  selector: "app-login-modal-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.scss"],
})
export class LoginModalComponent {
  loginFormGroup: FormGroup;
  isHidden = true;

  constructor(
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private fb: FormBuilder
  ) {
    this.loginFormGroup = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(PASSWORD_REGEX),
      ]),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
