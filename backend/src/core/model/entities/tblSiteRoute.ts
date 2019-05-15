import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblSiteRouteParam} from "./tblSiteRouteParam";


@Entity("tblSiteRoute",{schema:"public" } )
export class tblSiteRoute {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intSiteRouteID"
        })
    intSiteRouteID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteName"
        })
    varSiteRouteName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteDesktopBaseURL"
        })
    varSiteRouteDesktopBaseURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteMobileBaseURL"
        })
    varSiteRouteMobileBaseURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'active'",
        name:"varSiteRouteStatus"
        })
    varSiteRouteStatus:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteSiteRouteCreatedDate"
        })
    dteSiteRouteCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteSiteRouteModifiedDate"
        })
    dteSiteRouteModifiedDate:Date;
        

   
    @OneToMany(type=>tblSiteRouteParam, tblSiteRouteParam=>tblSiteRouteParam.intSiteRouteParamSiteRoute,{ onDelete: 'CASCADE' , })
    tblSiteRouteParams:tblSiteRouteParam[];
    
}
