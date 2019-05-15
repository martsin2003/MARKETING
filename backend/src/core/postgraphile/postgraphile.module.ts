import { Module, Provider, Type } from '@nestjs/common';
import { PostgraphilePlugin } from './postgraphile-plugin.interface';
import { PostgraphileService } from './postgraphile.service';
import { FEATURE_PLUGINS_TOKEN } from './tokens';

@Module({
  imports: [],
  providers: [PostgraphileService],
  exports: [PostgraphileService],
})
export class PostgraphileModule {
  static generateProviders(
    pluginTypes: Type<PostgraphilePlugin>[]
  ): Provider[] {
    return [
      ...pluginTypes,
      {
        provide: FEATURE_PLUGINS_TOKEN,
        useFactory: (...instances: any[]) => instances,
        inject: pluginTypes
      }
    ];
  }
}
