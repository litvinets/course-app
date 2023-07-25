import { Component, OnInit } from "@angular/core";
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
import { ValidationPatterns } from "@app/shared";
import { markFormGroupTouched } from "@app/shared/utils/forms";
import * as fromUser from "../../../store/user";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent implements OnInit {
  readonly ValidationPatterns = ValidationPatterns;
  registrationFormGroup: FormGroup;

  isPasswordHidden = true;
  isRepeatPasswordHidden = true;

  constructor(private fb: FormBuilder, private store: Store) {
    this.registrationFormGroup = this.fb.group(
      {
        email: new FormControl(null, {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.maxLength(128),
            Validators.pattern(EMAIL_REGEX),
          ],
        }),
        password: new FormControl(null, {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
            Validators.pattern(PASSWORD_REGEX),
          ],
        }),
        repeatPassword: new FormControl(null, {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
            Validators.pattern(PASSWORD_REGEX),
          ],
        }),
      },
      { validator: this.repeatPasswordValidator }
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registrationFormGroup.valid) {
      const value = this.registrationFormGroup.value;
      const credentials: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      };
      this.store.dispatch(new fromUser.SignUpEmail(credentials));
    } else {
      markFormGroupTouched(this.registrationFormGroup);
    }
  }

  private repeatPasswordValidator(group: FormGroup): {
    [key: string]: boolean;
  } {
    const password = group.get("password");
    const repeatPassword = group.get("repeatPassword");

    return !!repeatPassword?.value && repeatPassword.value !== password.value
      ? { repeatPassword: true }
      : null;
  }
}
