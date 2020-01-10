import { Component, OnInit, HostListener } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [
    trigger("openClose", [
      // ...
      state("open", style({})),
      state(
        "closed",
        style({
          height: 0,
          opacity: 0,
          "pointer-events": "none"
        })
      ),
      transition("open => closed", [animate("0.2s")]),
      transition("closed => open", [animate("0.3s")])
    ])
  ]
})
export class MenuComponent implements OnInit {
  constructor() {}

  showMenu: Boolean = false;
  showMainMenu: Boolean = false;
  ngOnInit() {}
  @HostListener("window:scroll", ["$event"])
  scrollHandler(event) {
    if (window.pageYOffset > 400) {
      this.showMainMenu = true;
    } else {
      this.showMainMenu = false;
      this.showMenu = false;
    }
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
