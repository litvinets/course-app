import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  EMAIL_REGEX,
  NUMBERS_REGEX,
  PASSWORD_REGEX,
} from "@app/shared/constants/regex-constants";
import { ValidationConstants, ValidationPatterns } from "@app/shared";
import { markFormGroupTouched } from "@app/shared/utils/forms";
import * as fromUser from "../../../store/user";
import { Store } from '@ngrx/store';

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

  constructor(private fb: FormBuilder, private store: Store ) {
    this.registrationFormGroup = this.fb.group(
      {
        fullName: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.maxLength(ValidationConstants.TITLE_MAX_LENGTH),
          ],
        }),
        company: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.maxLength(ValidationConstants.TITLE_MAX_LENGTH),
          ],
        }),
        phone: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.pattern(NUMBERS_REGEX),
            Validators.maxLength(ValidationConstants.PHONE_LENGTH),
            Validators.minLength(ValidationConstants.PHONE_LENGTH),
          ],
        }),
        email: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern(EMAIL_REGEX),
            Validators.maxLength(ValidationConstants.EMAIL_MAX_LENGTH),
          ],
        }),
        password: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.pattern(PASSWORD_REGEX),
            Validators.minLength(ValidationConstants.PASSWORD_MIN_LENGTH),
          ],
        }),
        repeatPassword: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.pattern(PASSWORD_REGEX),
            Validators.minLength(ValidationConstants.PASSWORD_MIN_LENGTH),
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
      this.store.dispatch(new fromUser.SignUpEmail(credentials))
    } else {
      markFormGroupTouched(this.registrationFormGroup);
    }
  }

  private repeatPasswordValidator(group: FormGroup): {
    [key: string]: boolean;
  } {
    const password = group.get("password");
    const repeatPassword = group.get("repeatPassword");

    return !!repeatPassword.value && repeatPassword.value !== password.value
      ? { repeatPassword: true }
      : null;
  }
}
