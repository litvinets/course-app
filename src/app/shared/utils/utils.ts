import { Constants } from '../constants/constants';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { CatalogItemModel } from '@app/shared';

/**
 * Utility class that providers methods for shared data manipulations
 */
export class Util {
  /*Detects device and opens map*/
  public static mapLink(): void {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.open(`${Constants.ADDRESS_URL_APPLE} ${Constants.ADDRESS}`);
    } else if (/Android/i.test(navigator.userAgent)) {
      window.open(`${Constants.ADDRESS_URL_GOOGLE} ${Constants.ADDRESS}`);
    } else {
      window.open(`${Constants.ADDRESS_URL_GOOGLE} ${Constants.ADDRESS}`, '_blank');
    }
  }
}

