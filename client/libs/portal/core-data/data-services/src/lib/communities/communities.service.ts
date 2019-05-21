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
    return this.allTblCommunitiesGeneratedQuery({
      first: 4,
      condition: {
        varCommunityStatus: 'active'
      }
    }).pipe(
      map(res => {
        console.log('res: ', res);
        return res;
      })
    );
  }
}
