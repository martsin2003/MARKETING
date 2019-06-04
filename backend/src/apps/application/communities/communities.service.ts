import { DB_CONNECTION_TOKEN } from './../../../core/typeorm/constants';
import { tblZipCodes } from './../../../core/model/entities/tblZipCodes';
import { Injectable, Inject } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { tblCommunity } from 'src/core/model/entities/tblCommunity';

@Injectable()
export class CommunitiesService {
  communityRepository: Repository<tblCommunity>;
  constructor(private connection: Connection) {
    this.communityRepository = this.connection.getRepository(tblCommunity);
  }
  async getCommunities(username, password) {
    const zipCode = await this.communityRepository.findOne();
    return 'success';
  }
}
