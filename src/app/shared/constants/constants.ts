import { OrderStatus } from '@app/shared/store/orders';

/**
 * Constants
 */
export class Constants {
  static readonly ADDRESS_URL_GOOGLE = 'https://www.google.com/maps/place/';
  static readonly ADDRESS_URL_APPLE = 'http://maps.apple.com:';
  static readonly ADDRESS = 'Шолуденко,1 ,Вишгород';

  static readonly PHONE_NUMBER_PLACEHOLDER = '+38 096 000 00 00';
}

export const ACTIVE_ORDER_STATUSES = [OrderStatus.New, OrderStatus.InProgress];
export const ARCHIVE_ORDER_STATUSES = [OrderStatus.Canceled, OrderStatus.Completed];

export class ValidationConstants {
  static readonly EMAIL_MAX_LENGTH = 128;
  static readonly PHONE_LENGTH = 10;
  static readonly PASSWORD_MIN_LENGTH = 8;
  static readonly TITLE_MAX_LENGTH = 60;
}

export class ValidationPatterns {
  static readonly EMAIL_PATTERN = 'Шаблон електронної пошти не збігається. Електронна пошта має містити символ "@", латинські букви до і після символу"@" та точку. Максимальна довжина електронної пошти 128';
  static readonly PASSWORD_PATTERN = 'Пароль повинен бути довжиною не менше 8 символів та містити букви в обох регістрах, цифри, спеціальні знаки';
  static readonly REPEAT_PASSWORD = 'Пароль не співпадає';
}
