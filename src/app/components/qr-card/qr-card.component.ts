import {Component, inject, model} from '@angular/core';
import {BeConnectionService} from '../../services/be-connection.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-qr-card',
  imports: [
    FormsModule,
  ],
  templateUrl: './qr-card.component.html',
  standalone: true,
  styleUrl: './qr-card.component.css'
})
export class QrCardComponent {
  connectionService = inject(BeConnectionService);
  input = model('');
  output = model('');

  async getBEresponse() {
    this.output.set(await this.connectionService.getQRCode(this.input()));
  }
}
