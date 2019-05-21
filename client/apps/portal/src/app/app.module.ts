import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Apollo, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { setContext } from 'apollo-link-context';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@brookfield/material';
import { environment } from '../environments/environment';
import { PortalCoreDataDataServicesModule } from '@brookfield/portal/core-data/data-services';
import { PortalCoreStateModule } from '@brookfield/portal/core-state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApolloModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PortalCoreDataDataServicesModule,
    PortalCoreStateModule,
    PortalSharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo) {
    const auth = setContext((_, { headers }) => {
      // todo add authorization later
      const token = '';

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      };
    });

    const httpLinkBatch = new BatchHttpLink({
      uri: environment.graphqlEndpoint
    });

    apollo.create({
      link: auth.concat(httpLinkBatch),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'network-only'
        }
      }
    });
  }
}
