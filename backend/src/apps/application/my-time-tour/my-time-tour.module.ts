import { MyTimeTourService } from './my-time-tour.service';
import { Module } from '@nestjs/common';
import { MyTimeTourResolver } from './my-time-tour.resolver';

@Module({
  providers: [MyTimeTourResolver, MyTimeTourService]
})
export class MyTimeTourModule {}
