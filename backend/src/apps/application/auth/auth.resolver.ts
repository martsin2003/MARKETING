import { AuthService } from './auth.service';
import { Resolver } from '@nestjs/graphql';
import { Query, Args } from '@nestjs/graphql';

@Resolver('Auth')
export class AuthResolver {
    constructor(private authService: AuthService) {

    }

    @Query()
    async login(
      @Args('username') username: string,
      @Args('password') password: string
    ) {
      return this.authService.login(username, password);
    }
}
