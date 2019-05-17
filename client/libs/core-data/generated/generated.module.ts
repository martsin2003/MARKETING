import { NgModule } from "@angular/core";
import { TblSiteplanServiceGenerated } from "./tbl-siteplan/services/tbl-siteplan.service.generated";
import { TblSiteplanFactoryServiceGenerated } from "./tbl-siteplan/services/tbl-siteplan-factory.service.generated";

@NgModule( {
    imports: [
    ],
    providers: [
        TblSiteplanServiceGenerated,
        TblSiteplanFactoryServiceGenerated,
    ]
})
export class GeneratedModule {
}
