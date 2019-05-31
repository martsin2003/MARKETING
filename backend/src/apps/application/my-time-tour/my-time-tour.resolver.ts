import { Resolver, Query, Args } from '@nestjs/graphql';
import { MyTimeTourService } from './my-time-tour.service';

@Resolver('MyTimeTour')
export class MyTimeTourResolver {
  constructor(private myTimeTourService: MyTimeTourService) {}

  @Query()
  async getNetverifyLink(
    @Args('linkType') linkType: string,
    @Args('userReference') userReference: string
  ) {
    return this.myTimeTourService.getNetverifyLink(linkType, userReference);
  }
}
