import { Component } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  errorMessage = 'Error Occured! Contact support @123';

}
