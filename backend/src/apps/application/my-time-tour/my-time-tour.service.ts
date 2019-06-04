import { Injectable } from '@nestjs/common';
import * as request from 'request';
import * as config from 'config';
const axios = require('axios');
require('request').debug = true;
@Injectable()
export class MyTimeTourService {
  getNetverifyLink(linkType: string, userReference: string) {
    return axios({
      method: 'post',
      url: '/',
      baseURL: config.get('netverify.initiateUrl'),
      data: {
        customerInternalReference: 'transaction_123222',
        userReference: 'user_1234',
        successUrl: 'https://a36d8eea.ngrok.io/success',
        errorUrl: 'https://a36d8eea.ngrok.io/error',
        callbackUrl: 'https://a36d8eea.ngrok.io/callback',
        presets: [
          {
            index: 1,
            country: 'UKR',
            type: linkType
          }
        ],
        locale: 'en-GB'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        username: config.get('netverify.apiToken'),
        password: config.get('netverify.apiSecret')
      }
    })
      .then(response => {
        return response.data.redirectUrl;
      })
      .catch(error => {
        throw error;
      });
  }
}
