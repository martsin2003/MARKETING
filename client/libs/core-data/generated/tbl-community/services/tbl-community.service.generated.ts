import { CreateTblCommunityGeneratedMutation } from "./../../graphql-requests-model.interface";
import { createTblCommunityGeneratedMutation } from "./../graphql/tbl-community-queries.graphql.generated";
import { CreateTblCommunityGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { UpdateTblCommunityGeneratedMutation } from "./../../graphql-requests-model.interface";
import { updateTblCommunityGeneratedMutation } from "./../graphql/tbl-community-queries.graphql.generated";
import { UpdateTblCommunityGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { UpdateTblCommunityByIntCommunityIdGeneratedMutation } from "./../../graphql-requests-model.interface";
import { updateTblCommunityByIntCommunityIdGeneratedMutation } from "./../graphql/tbl-community-queries.graphql.generated";
import { UpdateTblCommunityByIntCommunityIdGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { DeleteTblCommunityGeneratedMutation } from "./../../graphql-requests-model.interface";
import { deleteTblCommunityGeneratedMutation } from "./../graphql/tbl-community-queries.graphql.generated";
import { DeleteTblCommunityGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { DeleteTblCommunityByIntCommunityIdGeneratedMutation } from "./../../graphql-requests-model.interface";
import { deleteTblCommunityByIntCommunityIdGeneratedMutation } from "./../graphql/tbl-community-queries.graphql.generated";
import { DeleteTblCommunityByIntCommunityIdGeneratedMutationVariables } from "./../../graphql-requests-model.interface";
import { AllTblCommunitiesGeneratedQuery } from "./../../graphql-requests-model.interface";
import { allTblCommunitiesGeneratedQuery } from "./../graphql/tbl-community-queries.graphql.generated";
import { AllTblCommunitiesGeneratedQueryVariables } from "./../../graphql-requests-model.interface";
import { TblCommunityByIntCommunityIdGeneratedQuery } from "./../../graphql-requests-model.interface";
import { tblCommunityByIntCommunityIdGeneratedQuery } from "./../graphql/tbl-community-queries.graphql.generated";
import { TblCommunityByIntCommunityIdGeneratedQueryVariables } from "./../../graphql-requests-model.interface";
import { TblCommunityGeneratedQuery } from "./../../graphql-requests-model.interface";
import { tblCommunityGeneratedQuery } from "./../graphql/tbl-community-queries.graphql.generated";
import { TblCommunityGeneratedQueryVariables } from "./../../graphql-requests-model.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Apollo } from "apollo-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class TblCommunityServiceGenerated {
    constructor(protected apollo: Apollo) {
    }

    createTblCommunityGeneratedMutation(variables: CreateTblCommunityGeneratedMutationVariables): Observable<CreateTblCommunityGeneratedMutation> {
        return this.apollo.mutate({mutation: createTblCommunityGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    updateTblCommunityGeneratedMutation(variables: UpdateTblCommunityGeneratedMutationVariables): Observable<UpdateTblCommunityGeneratedMutation> {
        return this.apollo.mutate({mutation: updateTblCommunityGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    updateTblCommunityByIntCommunityIdGeneratedMutation(variables: UpdateTblCommunityByIntCommunityIdGeneratedMutationVariables): Observable<UpdateTblCommunityByIntCommunityIdGeneratedMutation> {
        return this.apollo.mutate({mutation: updateTblCommunityByIntCommunityIdGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    deleteTblCommunityGeneratedMutation(variables: DeleteTblCommunityGeneratedMutationVariables): Observable<DeleteTblCommunityGeneratedMutation> {
        return this.apollo.mutate({mutation: deleteTblCommunityGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    deleteTblCommunityByIntCommunityIdGeneratedMutation(variables: DeleteTblCommunityByIntCommunityIdGeneratedMutationVariables): Observable<DeleteTblCommunityByIntCommunityIdGeneratedMutation> {
        return this.apollo.mutate({mutation: deleteTblCommunityByIntCommunityIdGeneratedMutation, variables})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    allTblCommunitiesGeneratedQuery(variables: AllTblCommunitiesGeneratedQueryVariables): Observable<AllTblCommunitiesGeneratedQuery> {
        return this.apollo.query({query: allTblCommunitiesGeneratedQuery, variables, fetchPolicy: 'network-only'})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    tblCommunityByIntCommunityIdGeneratedQuery(variables: TblCommunityByIntCommunityIdGeneratedQueryVariables): Observable<TblCommunityByIntCommunityIdGeneratedQuery> {
        return this.apollo.query({query: tblCommunityByIntCommunityIdGeneratedQuery, variables, fetchPolicy: 'network-only'})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }

    tblCommunityGeneratedQuery(variables: TblCommunityGeneratedQueryVariables): Observable<TblCommunityGeneratedQuery> {
        return this.apollo.query({query: tblCommunityGeneratedQuery, variables, fetchPolicy: 'network-only'})
            .pipe(map((queryResult: any) => queryResult.data as any));
    }
}
