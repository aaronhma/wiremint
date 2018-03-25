import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  changeTheme(color: string): void {
    document.body.style.backgroundColor = color;
  }
}
