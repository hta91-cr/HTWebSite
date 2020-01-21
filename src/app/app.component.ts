import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu/menu.component';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HT';

  constructor(public updates: SwUpdate) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => this.updateApp());
    })
  }
  updateApp() {
  
    document.location.reload();
    console.log("The app is updating right now");

  }

}
