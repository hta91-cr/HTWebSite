import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu/menu.component';
import { SwUpdate } from '@angular/service-worker';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HT';

  constructor(public updates: SwUpdate, private wowService: NgwWowService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => this.updateApp());
      this.wowService.init();
    })
  }
  updateApp() {

    document.location.reload();
    console.log("The app is updating right now");

  }

}
