import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  get isMainPage(): boolean {
    return this.router.url === "/";
  }

  constructor(private router: Router) {}
}
