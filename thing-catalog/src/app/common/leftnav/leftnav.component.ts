import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  @HostBinding('attr.role') role = 'nav';

  constructor() { }

  ngOnInit() {
  }

}
