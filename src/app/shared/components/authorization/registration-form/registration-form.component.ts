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
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent implements OnInit {
  registrationFormGroup: FormGroup;
  isHidden = true;

  constructor(
    private fb: FormBuilder,
  ) {
    this.registrationFormGroup = this.fb.group({
      fullName: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(NUMBERS_REGEX),
        Validators.max(9),
        Validators.min(9)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(PASSWORD_REGEX),
      ]),
      submitPassword: new FormControl("", [
        Validators.required,
        Validators.pattern(PASSWORD_REGEX),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {

  }
}
