import { FormGroup } from '@angular/forms';

/**
 * Utility class that providers methods for shared form manipulations
 */

export const markFormGroupTouched = (form: FormGroup) => {
  (Object as any).values(form.controls).forEach(control => {
    control.markAsTouched();

    if (control.controls) {
      markFormGroupTouched(control);
    }
  });
}
