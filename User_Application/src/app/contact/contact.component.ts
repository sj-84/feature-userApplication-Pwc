import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  contactNo: string;

  ngOnInit() {
    this.name = 'Subhojyoti Das';
    this.contactNo = '+91 9674253398';
  }
}
