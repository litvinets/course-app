import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "@app/shared/constants/regex-constants";
import { Store } from "@ngrx/store";
import {markFormGroupTouched} from "@app/shared/utils/forms";
import * as fromUser from "@app/shared/store/user";

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
    private fb: FormBuilder,
    private store: Store
  ) {
    this.loginFormGroup = this.fb.group({
      email: new FormControl("", {
        updateOn: "blur",
        validators: [
          Validators.required,
          Validators.maxLength(128),
          Validators.pattern(EMAIL_REGEX),
        ],
      }),
      password: new FormControl(null, {
        updateOn: "change",
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern(PASSWORD_REGEX),
        ],
      }),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if(this.loginFormGroup.valid) {
      const value = this.loginFormGroup.value;
      const credentials: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      };
      this.store.dispatch(new fromUser.SignInEmail(credentials));
      this.onClose();
    } else {
      markFormGroupTouched(this.loginFormGroup);
    }
  }

}
