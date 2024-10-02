import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../services/hardcodedauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  // isUserLoggedIn: boolean = false;

  constructor(public hardauthService: HardcodedauthService){}

  ngOnInit(): void {
    // this.isUserLoggedIn = this.hardauthService.isUserLoggedIn();
  }

}
