import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromUser from '@app/shared/store/user';
import { Subject, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { ValidationConstants, ValidationPatterns } from '@app/shared';
import { EMAIL_REGEX, NUMBERS_REGEX } from '@app/shared/constants/regex-constants';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  readonly ValidationPatterns = ValidationPatterns;

  orderFormGroup: FormGroup;
  user: fromUser.UserProfile | fromUser.User;

  private destroy$ = new Subject<boolean>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.orderFormGroup = this.fb.group({
      fullName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(ValidationConstants.TITLE_MAX_LENGTH),
        ],
      }),
      company: new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(ValidationConstants.TITLE_MAX_LENGTH),
        ],
      }),
      phone: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(NUMBERS_REGEX),
          Validators.maxLength(ValidationConstants.PHONE_LENGTH),
          Validators.minLength(ValidationConstants.PHONE_LENGTH),
        ],
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern(EMAIL_REGEX),
          Validators.maxLength(ValidationConstants.EMAIL_MAX_LENGTH),
        ],
      }),
      comment: new FormControl(''),
      fileURLs: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.store
      .select(fromUser.getUser)
      .pipe(
        takeUntil(this.destroy$),
        tap((user: fromUser.UserProfile | fromUser.User) => (this.user = user))
      )
      .subscribe();
  }

  onApplyProfileData(event: MatCheckboxChange): void {
    if (event.checked) {
      this.orderFormGroup.patchValue(this.user);
    } else {
      this.orderFormGroup.reset();
    }
  }

  onAddNewOrder(): void {

  }

  onAddFiles(data: string | string[]): void {
    this.orderFormGroup.get('fileURLs').patchValue(data);
  }
}
