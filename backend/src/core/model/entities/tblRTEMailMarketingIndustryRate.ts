import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTEMailMarketingIndustryRate",{schema:"public" } )
export class tblRTEMailMarketingIndustryRate {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTEMailMarketingIndustryRateID"
        })
    intRTEMailMarketingIndustryRateID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTEMailMarketingIndustryRateAudienceTypeID"
        })
    intRTEMailMarketingIndustryRateAudienceTypeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTEMailMarketingIndustryRateAudienceType"
        })
    varRTEMailMarketingIndustryRateAudienceType:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltRTEMailMarketingIndustryRateOpen"
        })
    fltRTEMailMarketingIndustryRateOpen:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltRTEMailMarketingIndustryRateCTR"
        })
    fltRTEMailMarketingIndustryRateCTR:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTEMailMarketingIndustryRateSource"
        })
    varRTEMailMarketingIndustryRateSource:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTEMailMarketingIndustryRateYear"
        })
    intRTEMailMarketingIndustryRateYear:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTEMailMarketingIndustryRateYearType"
        })
    varRTEMailMarketingIndustryRateYearType:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTEMailMarketingIndustryRateStartDate"
        })
    dteRTEMailMarketingIndustryRateStartDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTEMailMarketingIndustryRateEndDate"
        })
    dteRTEMailMarketingIndustryRateEndDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEMailMarketingIndustryRateCreatedDate"
        })
    dteRTEMailMarketingIndustryRateCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEMailMarketingIndustryRateModifiedDate"
        })
    dteRTEMailMarketingIndustryRateModifiedDate:Date;
        
}
