import { CommunitiesService } from './communities.service';

import { Resolver } from '@nestjs/graphql';
import { Query, Args } from '@nestjs/graphql';

@Resolver('Auth')
export class CommunitiesResolver {
  constructor(private communitiesService: CommunitiesService) {}

  @Query()
  async getCommunities(@Args('username') username: string, @Args('password') password: string) {
    return this.communitiesService.getCommunities(username, password);
  }
}
