import { TypeormCoreModule } from './../../../core/typeorm/typeorm-core.module';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    // TypeormCoreModule
  ],
  providers: [AuthService, AuthResolver]
})
export class AuthModule {}
