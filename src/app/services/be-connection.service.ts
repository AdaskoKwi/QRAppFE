import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeConnectionService {

  async getQRCode(text: string) {

    const url = `http://localhost:8080/api/qr/get?text=${text}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();

      return data.qrCodeBase64;

    } catch (error) {
      console.log(error)
    }
  }

  constructor() { }
}
