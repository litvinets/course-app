import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ValidationConstants, ValidationPatterns } from "@app/shared";
import {
  EMAIL_REGEX,
  NUMBERS_REGEX,
} from "@app/shared/constants/regex-constants";
import { Store } from "@ngrx/store";
import * as fromUser from "../../shared/store/user";
import { UserProfile } from "@app/shared/models";
import {Subject, takeUntil, tap} from "rxjs";
import {Role} from "@app/shared/enums";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {
  readonly ValidationPatterns = ValidationPatterns;

  profileFormGroup: FormGroup;
  user: fromUser.UserProfile | fromUser.User;

  get isSaveEnabled(): boolean {
    return (
      (this.profileFormGroup.valid && !this.user) ||
      (this.user && this.profileFormGroup.dirty && this.profileFormGroup.valid)
    );
  }

  private destroy$ = new Subject<boolean>();

  constructor(private fb: FormBuilder, private store: Store) {
    this.profileFormGroup = this.fb.group({
      fullName: new FormControl("", {
        validators: [
          Validators.required,
          Validators.maxLength(ValidationConstants.TITLE_MAX_LENGTH),
        ],
      }),
      company: new FormControl("", {
        validators: [
          Validators.required,
          Validators.maxLength(ValidationConstants.TITLE_MAX_LENGTH),
        ],
      }),
      phone: new FormControl("", {
        validators: [
          Validators.required,
          Validators.pattern(NUMBERS_REGEX),
          Validators.maxLength(ValidationConstants.PHONE_LENGTH),
          Validators.minLength(ValidationConstants.PHONE_LENGTH),
        ],
      }),
      email: new FormControl("", {
        validators: [
          Validators.required,
          Validators.email,
          Validators.pattern(EMAIL_REGEX),
          Validators.maxLength(ValidationConstants.EMAIL_MAX_LENGTH),
        ],
      }),
    });
  }

  ngOnInit(): void {
    this.store
      .select(fromUser.getUser)
      .pipe(
        takeUntil(this.destroy$),
        tap((user: fromUser.UserProfile | fromUser.User) => {
          this.user = user;
          if (this.user) {
            this.profileFormGroup.patchValue(this.user);
          }
        })
      )
      .subscribe();
  }

  onSave(): void {
    const userProfile: UserProfile = {
      ...this.profileFormGroup.value,
      uid: this.user?.uid,
      role: Role.User
    };
    if (this.user) {
      this.store.dispatch(new fromUser.UpdateUser(userProfile));
    } else {
      this.store.dispatch(new fromUser.CreateUser(userProfile));
    }
    this.profileFormGroup.markAsPristine();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
