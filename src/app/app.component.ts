import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';

  isValid=true;
  clickme(i:any)
  {
    this.isValid=i;
  }
}
