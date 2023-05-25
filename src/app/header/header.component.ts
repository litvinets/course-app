import { Component } from "@angular/core";
import { Constants, Util } from '../shared/index';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  readonly constants = Constants;

  /*Detects device and opens map*/
  mapLink(): void {
    Util.mapLink();
  }
}
