import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QrCardComponent} from './components/qr-card/qr-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QrCardComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QRAppFE';
}
