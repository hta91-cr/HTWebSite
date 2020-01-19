import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  loading: Boolean

  ngOnInit() {
    this.loading = false;
  }

  sendEmail() {
    this.loading = true;
    setTimeout(() => { this.loading = false; alert('Your message was sent, thank you!');}, 3000)
  }

}
