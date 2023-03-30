import { Injectable } from '@angular/core';
const webpush = require('web-push');
const vapidkeys = {
  "publicKey" : "BC7F6APug2fqzszC-KV-AJJx9Mv4sQXPtDrwaGXuOFlAPd484uv8lGFCweiI3Hcb5b7u6ajff-A0WmFp3GolQK4",
  "privateKey" : "NKSe_Y0qvPT_i946UkrcShp4FykvIghXuNodSZ9D1LM"
};

webpush.setVapidDetails(
  vapidkeys.publicKey,
  vapidkeys.privateKey
);


@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {

  constructor() { }

}
