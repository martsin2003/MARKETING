import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblSiteRoute} from "./tblSiteRoute";


@Entity("tblSiteRouteParam",{schema:"public" } )
export class tblSiteRouteParam {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intSiteRouteParamID"
        })
    intSiteRouteParamID:string;
        

   
    @ManyToOne(type=>tblSiteRoute, tblSiteRoute=>tblSiteRoute.tblSiteRouteParams,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intSiteRouteParamSiteRouteID'})
    intSiteRouteParamSiteRoute:tblSiteRoute | null;


    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteParamPlatform"
        })
    varSiteRouteParamPlatform:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteParamName"
        })
    varSiteRouteParamName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteParamValue"
        })
    varSiteRouteParamValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteParamDataType"
        })
    varSiteRouteParamDataType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteParamSiteType"
        })
    varSiteRouteParamSiteType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteRouteParamDefault"
        })
    varSiteRouteParamDefault:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteSiteRouteParamCreatedDate"
        })
    dteSiteRouteParamCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteSiteRouteParamModifiedDate"
        })
    dteSiteRouteParamModifiedDate:Date;
        
}
