import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { StyleManagerService } from "./style-manager.service";
import { Option } from "./interfaces/option.model";

import { options } from "./../assets/options.json";
@Injectable()
export class ThemeService {
    constructor(
      private http: HttpClient,
      private styleManager: StyleManagerService
    ) {}

    getThemeOptions(): Observable<Option[]> {
      var option = this.http.get<Array<Option>>("assets/options.json");
      return option;
    }

    setTheme(themeToSet : string) {
      this.styleManager.setStyle(
        "theme",
        `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
      );
  }
}
