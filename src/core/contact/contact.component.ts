import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.createForm()
  }

  loading: Boolean
  mailForm: FormGroup;
  ngOnInit() {
    this.loading = false;
  }

  sendEmail() {
    let btnModal = document.getElementById('modal-btn') as HTMLElement
    this.mailForm.markAllAsTouched();
    let msg = this.mailForm.controls['message'].value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    if (this.mailForm.valid) {
      this.loading = true;
      this.http.get("https://us-central1-htorres-25765.cloudfunctions.net/sendEmail?name=" + this.mailForm.controls['name'].value + "&lastname=" + this.mailForm.controls['lastname'].value + "&email=" + this.mailForm.controls['email'].value + "&message=" + msg)
        .subscribe(res => {
          // console.log(res.message);
          this.loading = false;
          btnModal.click();
          this.mailForm.reset();
          setTimeout(() => {
            let btnModalHide = document.getElementById('modal-hidebtn') as HTMLElement
            btnModalHide.click()
          }, 3000)

        },
          error => {
            console.log('error');
          })
    }
  }

  createForm() {
    this.mailForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

}
