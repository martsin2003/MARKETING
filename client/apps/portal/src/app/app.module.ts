import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Apollo, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { setContext } from 'apollo-link-context';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@brookfield/material';
import { PortalSharedFeatureNavigationModule } from '@brookfield/portal/shared/feature-navigation';
import { PortalSharedFeatureFooterModule } from '@brookfield/portal/shared/feature-footer';
import { environment } from '../environments/environment';
import { PortalCoreDataDataServicesModule } from '@brookfield/portal/core-data/data-services';
import { PortalCoreStateModule } from '@brookfield/portal/core-state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApolloModule,
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PortalSharedFeatureNavigationModule,
    PortalSharedFeatureFooterModule,
    PortalCoreDataDataServicesModule,
    PortalCoreStateModule
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
      cache: new InMemoryCache({
        dataIdFromObject: o => (o.id ? `${o.__typename}:${o.id}` : null)
      }),
      defaultOptions: {
        query: {
          fetchPolicy: 'network-only'
        }
      }
    });
  }
}
