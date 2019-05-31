import { Injectable } from '@nestjs/common';
import * as request from 'request';
import * as config from 'config';

@Injectable()
export class MyTimeTourService {
  getNetverifyLink(linkType: string, userReference: string) {
    return new Promise((resolve, reject) => {
    return request.post(
      {
        url: config.get('netverify.initiateUrl'),
        method: 'POST',
        json: true,
        auth: {
          user: config.get('netverify.apiToken') as string,
          pass: config.get('netverify.apiSecret') as string
        },
        body: {
          customerInternalReference: 'transaction_1234',
          userReference: 'user_1234',
          successUrl: 'https://a36d8eea.ngrok.io/success',
          errorUrl: 'https://a36d8eea.ngrok.io/error',
          callbackUrl: 'https://a36d8eea.ngrok.io/callback',
          reportingCriteria : 'myReport1234',
          workflowId: 200,
          presets: [
            {
              index: 1,
              country: 'UKR',
              type: 'DRIVING_LICENSE'
            }
          ],
          locale: 'en-GB'
        }
      },
      (err, response) => {
        console.log('response: ', response);
        console.log('err: ', err);
        if (response) {
          return resolve(response)
        } else {
          return reject(err);
        }
      }
    );
    });

  }
}
