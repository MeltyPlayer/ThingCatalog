import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  @HostBinding('attr.role') role = 'header';

  constructor() { }

  ngOnInit() {
  }

}
