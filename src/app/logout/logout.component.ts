import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../services/hardcodedauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodeauthService: HardcodedauthService){}

  ngOnInit(): void {
    this.hardcodeauthService.logout();    
  }

}
