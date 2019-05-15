import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTpURLTracking",{schema:"public" } )
export class tblRTpURLTracking {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTpURLTrackingID"
        })
    intRTpURLTrackingID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTpURLTrackingCompanyID"
        })
    intRTpURLTrackingCompanyID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingWebsiteURL"
        })
    varRTpURLTrackingWebsiteURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingCampaignSource"
        })
    varRTpURLTrackingCampaignSource:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingCampaignMedium"
        })
    varRTpURLTrackingCampaignMedium:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingCampaignTerm"
        })
    varRTpURLTrackingCampaignTerm:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingCampaignContent"
        })
    varRTpURLTrackingCampaignContent:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingCampaignName"
        })
    varRTpURLTrackingCampaignName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingWhole"
        })
    varRTpURLTrackingWhole:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingCategory"
        })
    varRTpURLTrackingCategory:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTpURLTrackingAdvertisingTypeID"
        })
    intRTpURLTrackingAdvertisingTypeID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTpURLTrackingRequestedDate"
        })
    dteRTpURLTrackingRequestedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTpURLTrackingInsertRequiredDate"
        })
    dteRTpURLTrackingInsertRequiredDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingURL"
        })
    varRTpURLTrackingURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingJobNumber"
        })
    varRTpURLTrackingJobNumber:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTpURLTrackingURLFolder"
        })
    varRTpURLTrackingURLFolder:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bpRTURLTrackingArchive"
        })
    bpRTURLTrackingArchive:boolean | null;
        
}
