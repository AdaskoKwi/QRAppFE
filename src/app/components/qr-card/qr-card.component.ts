import {Component, inject, model} from '@angular/core';
import {BeConnectionService} from '../../services/be-connection.service';
import {FormsModule} from '@angular/forms';
import {FileService} from '../../services/file.service';

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
  fileService = inject(FileService);
  input = model('');
  output = model('');

  async getBEResponse() {
    this.output.set(await this.connectionService.getQRCode(this.input()));
  }

  downloadQR() {
    this.fileService.downloadBase64File(this.output(), "qrcode.png");
  }
}
