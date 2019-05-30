import { TypeormCoreModule } from './../../../core/typeorm/typeorm-core.module';
import { Module } from '@nestjs/common';
import { CommunitiesService } from './communities.service';
import { CommunitiesResolver } from './communities.resolver';

@Module({
  imports: [
    // TypeormCoreModule
  ],
  providers: [CommunitiesResolver, CommunitiesService]
})
export class CommunitiesModule {}
