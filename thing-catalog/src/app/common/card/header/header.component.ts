import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'card-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostBinding('attr.role') role = 'heading';
  @HostBinding('attr.aria-level') ariaLevel = '3';

  constructor() { }

  ngOnInit() {
  }

}
