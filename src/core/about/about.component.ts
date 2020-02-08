import { Component, OnInit, AfterViewInit } from "@angular/core";
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements AfterViewInit {
  constructor( private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngAfterViewInit() {}
}
