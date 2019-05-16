import { get } from 'lodash';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { setContext } from 'apollo-link-context';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@brookfield/material';
import { EmpowerInnovationsComponent } from './empower-innovations/empower-innovations.component';
import { WhyBrookfieldComponent } from './why-brookfield/why-brookfield.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CommunityMicrositeComponent } from './community-microsite/community-microsite.component';
import { AreaAmenitiesComponent } from './community-microsite/area-amenities/area-amenities.component';
import { SitePlanComponent } from './community-microsite/site-plan/site-plan.component';
import { HomeownerReviewsComponent } from './community-microsite/homeowner-reviews/homeowner-reviews.component';
import { LocationInfoComponent } from './community-microsite/location-info/location-info.component';
import { CommunityMicrositeModule } from './community-microsite/community-microsite.module';
import { PortalSharedFeatureNavigationModule } from '@brookfield/portal/shared/feature-navigation';
import { PortalSharedFeatureFooterModule } from '@brookfield/portal/shared/feature-footer';
import { environment } from '../environments/environment';
import { allTblSiteplansGeneratedQuery } from 'libs/core-data/generated/tbl-siteplan/graphql/tbl-siteplan-queries.graphql.generated';

@NgModule({
  declarations: [
    AppComponent,
    EmpowerInnovationsComponent,
    WhyBrookfieldComponent,
    MyAccountComponent
  ],
  imports: [
    ApolloModule,
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CommunityMicrositeModule,
    PortalSharedFeatureNavigationModule,
    PortalSharedFeatureFooterModule
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
