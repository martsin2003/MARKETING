import { getNetverifyLink } from './my-time-tour.graphql';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTimeTourService {
  constructor(public apollo: Apollo) {}

  getJumioLink(linkType: string) {
    return this.apollo
      .query({
        query: getNetverifyLink,
        variables: {
          linkType,
          userReference: '1'
        },
        fetchPolicy: 'network-only'
      })
      .pipe(
        map((queryResult: any) => {
          return queryResult.data as any;
        })
      );
  }
}
