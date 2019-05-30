import { allTblCommunitiesQuery } from './communities.queries';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { TblCommunityServiceGenerated } from './../../../../../../core-data/generated/tbl-community/services/tbl-community.service.generated';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunitiesService extends TblCommunityServiceGenerated {
  constructor(public apollo: Apollo) {
    super(apollo);
  }

  loadCommunities() {
    return this.apollo
      .query({
        query: allTblCommunitiesQuery,
        variables: {
          first: 4,
          condition: {
            varCommunityStatus: 'active'
          }
        },
        fetchPolicy: 'network-only'
      })
      .pipe(
        map((queryResult: any) => {
          console.log('queryResult: ', queryResult);
          return queryResult.data as any;
        })
      )
      .pipe(
        map(res => {
          console.log('res: ', res);
          return res;
        })
      );
  }
}
