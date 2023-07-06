import { Pipe, PipeTransform } from '@angular/core';
import { FILE_SIZE_UNITS, FILE_SIZE_UNITS_LONG } from '@app/shared/constants/file-sizes';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(sizeBytes: number, longForm?: boolean): string {
    const units = longForm ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;
    let power = Math.round(Math.log(sizeBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);
    const size = sizeBytes / Math.pow(1024, power);
    const formattedSize = Math.round(size * 100 / 100);

    const unit = units[power];

    return size ? `${formattedSize} ${unit}` : '0';
  }

}
