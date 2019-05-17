import { CreateTblSiteplanGeneratedMutation } from "./../../graphql-requests-model.interface";
import { createTblSiteplanGeneratedMutation } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { CreateTblSiteplanGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { UpdateTblSiteplanGeneratedMutation } from "./../../graphql-requests-model.interface";
import { updateTblSiteplanGeneratedMutation } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { UpdateTblSiteplanGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { UpdateTblSiteplanByIntSiteplanIdGeneratedMutation } from "./../../graphql-requests-model.interface";
import { updateTblSiteplanByIntSiteplanIdGeneratedMutation } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { UpdateTblSiteplanByIntSiteplanIdGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { DeleteTblSiteplanGeneratedMutation } from "./../../graphql-requests-model.interface";
import { deleteTblSiteplanGeneratedMutation } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { DeleteTblSiteplanGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { DeleteTblSiteplanByIntSiteplanIdGeneratedMutation } from "./../../graphql-requests-model.interface";
import { deleteTblSiteplanByIntSiteplanIdGeneratedMutation } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { DeleteTblSiteplanByIntSiteplanIdGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { AllTblSiteplansGeneratedQuery } from "./../../graphql-requests-model.interface";
import { allTblSiteplansGeneratedQuery } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { AllTblSiteplansGeneratedQueryVariables } from "./../../graphql-requests-model.interface";
import { TblSiteplanByIntSiteplanIdGeneratedQuery } from "./../../graphql-requests-model.interface";
import { tblSiteplanByIntSiteplanIdGeneratedQuery } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { TblSiteplanByIntSiteplanIdGeneratedQueryVariables } from "./../../graphql-requests-model.interface";
import { TblSiteplanGeneratedQuery } from "./../../graphql-requests-model.interface";
import { tblSiteplanGeneratedQuery } from "./../graphql/tbl-siteplan-queries.graphql.generated";
import { TblSiteplanGeneratedQueryVariables } from "./../../graphql-requests-model.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo } from "apollo-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class TblSiteplanServiceGenerated {
    constructor(protected apollo: Apollo) {
    }

    createTblSiteplanGeneratedMutation(variables: CreateTblSiteplanGeneratedMutationVariables): Observable<CreateTblSiteplanGeneratedMutation> {
        return this.apollo.mutate({mutation: createTblSiteplanGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    updateTblSiteplanGeneratedMutation(variables: UpdateTblSiteplanGeneratedMutationVariables): Observable<UpdateTblSiteplanGeneratedMutation> {
        return this.apollo.mutate({mutation: updateTblSiteplanGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    updateTblSiteplanByIntSiteplanIdGeneratedMutation(variables: UpdateTblSiteplanByIntSiteplanIdGeneratedMutationVariables): Observable<UpdateTblSiteplanByIntSiteplanIdGeneratedMutation> {
        return this.apollo.mutate({mutation: updateTblSiteplanByIntSiteplanIdGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    deleteTblSiteplanGeneratedMutation(variables: DeleteTblSiteplanGeneratedMutationVariables): Observable<DeleteTblSiteplanGeneratedMutation> {
        return this.apollo.mutate({mutation: deleteTblSiteplanGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    deleteTblSiteplanByIntSiteplanIdGeneratedMutation(variables: DeleteTblSiteplanByIntSiteplanIdGeneratedMutationVariables): Observable<DeleteTblSiteplanByIntSiteplanIdGeneratedMutation> {
        return this.apollo.mutate({mutation: deleteTblSiteplanByIntSiteplanIdGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    allTblSiteplansGeneratedQuery(variables: AllTblSiteplansGeneratedQueryVariables): Observable<AllTblSiteplansGeneratedQuery> {
        return this.apollo.query({query: allTblSiteplansGeneratedQuery, variables, fetchPolicy: 'network-only'})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    tblSiteplanByIntSiteplanIdGeneratedQuery(variables: TblSiteplanByIntSiteplanIdGeneratedQueryVariables): Observable<TblSiteplanByIntSiteplanIdGeneratedQuery> {
        return this.apollo.query({query: tblSiteplanByIntSiteplanIdGeneratedQuery, variables, fetchPolicy: 'network-only'})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    tblSiteplanGeneratedQuery(variables: TblSiteplanGeneratedQueryVariables): Observable<TblSiteplanGeneratedQuery> {
        return this.apollo.query({query: tblSiteplanGeneratedQuery, variables, fetchPolicy: 'network-only'})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }
}
