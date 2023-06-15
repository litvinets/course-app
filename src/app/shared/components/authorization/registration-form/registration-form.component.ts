import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  NUMBERS_REGEX,
  PASSWORD_REGEX,
} from "@app/shared/constants/regex-constants";
import { update } from "@angular/fire/database";
import { ValidationConstants } from "@app/shared";
import { markFormGroupTouched } from "@app/shared/utils/forms";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent implements OnInit {
  registrationFormGroup: FormGroup;

  isPasswordHidden = true;
  isRepeatPasswordHidden = true;

  constructor(private fb: FormBuilder) {
    this.registrationFormGroup = this.fb.group(
      {
        fullName: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        company: new FormControl("", {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        phone: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.pattern(NUMBERS_REGEX),
            Validators.max(ValidationConstants.PHONE_LENGTH),
            Validators.min(ValidationConstants.PHONE_LENGTH),
          ],
        }),
        email: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.email,
            Validators.max(ValidationConstants.EMAIL_MAX_LENGTH),
          ],
        }),
        password: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.pattern(PASSWORD_REGEX),
            Validators.min(ValidationConstants.PASSWORD_MIN_LENGTH),
          ],
        }),
        repeatPassword: new FormControl("", {
          updateOn: "blur",
          validators: [
            Validators.required,
            Validators.pattern(PASSWORD_REGEX),
            Validators.min(ValidationConstants.PASSWORD_MIN_LENGTH),
          ],
        }),
      },
      { validator: this.repeatPasswordValidator }
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registrationFormGroup.valid) {
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
      ? { repeat: true }
      : null;
  }
}
