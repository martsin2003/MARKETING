import { DB_CONNECTION_TOKEN } from './../../../core/typeorm/constants';
import { tblZipCodes } from './../../../core/model/entities/tblZipCodes';
import { Injectable, Inject } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class AuthService {

    zipCodeRepository: Repository<tblZipCodes>;
    constructor(
        private connection: Connection
    ) {
        this.zipCodeRepository = this.connection.getRepository(tblZipCodes);
    }
    async login(username, password) {
        const zipCode = await this.zipCodeRepository.findOne();
        console.log('zipCode: ', zipCode);
        return 'success';
    }
}
