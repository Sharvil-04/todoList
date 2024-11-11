import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  name: string = '';
  message: String = ''

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService
  ){}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getAPICall() {
    this.service.executeHelloWorlBeanService().subscribe(
      res => this.handleSuccessResponse(res)
    );
  }

  handleSuccessResponse(res: any){
    this.message = res.message;
  }
}
