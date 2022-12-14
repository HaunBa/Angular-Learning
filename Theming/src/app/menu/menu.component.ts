import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Option } from "./../interfaces/option.model";
import { ThemeService } from "./../theme-service.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  @Input() options: Array<Option> | null;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {
    this.options = new Array<Option>;
  }

  changeTheme(themeToSet : string) {
    this.themeChange.emit(themeToSet);
  }
}
