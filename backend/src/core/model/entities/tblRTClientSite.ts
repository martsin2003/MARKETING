import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTClientSite",{schema:"public" } )
export class tblRTClientSite {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTClientSiteID"
        })
    intRTClientSiteID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTClientSiteURL"
        })
    varRTClientSiteURL:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTClientSitePrimary"
        })
    bRTClientSitePrimary:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTClientSiteNotes"
        })
    varRTClientSiteNotes:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTClientSiteDataToCollect"
        })
    varRTClientSiteDataToCollect:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTClientSiteCreatedDate"
        })
    dteRTClientSiteCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTClientSiteModifiedDate"
        })
    dteRTClientSiteModifiedDate:Date;
        
}
