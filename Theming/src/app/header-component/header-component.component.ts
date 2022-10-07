import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

import { Option } from "./../interfaces/option.model";
import { ThemeService } from "./../theme-service.service";

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-header",
  templateUrl: "./header-component.component.html",
  styleUrls: ["./header-component.component.scss"]
})

export class HeaderComponent implements OnInit  {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions()!;

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setTheme("deeppurple-amber");
  }

  themeChangeHandler(themeToSet: string) {
    this.themeService.setTheme(themeToSet);
  }
}
