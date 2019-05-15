import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTAdvertisingType} from "./tblRTAdvertisingType";
import {tblRTAdvertisingSource} from "./tblRTAdvertisingSource";
import {tblRTDisplayAdGroupMediaSource} from "./tblRTDisplayAdGroupMediaSource";
import {tblRTDisplayNonAPIAdData} from "./tblRTDisplayNonAPIAdData";
import {tblRTDisplayNonAPIGoalData} from "./tblRTDisplayNonAPIGoalData";
import {tblRTEmailMarketingItem} from "./tblRTEmailMarketingItem";


@Entity("tblRTMediaSource",{schema:"public" } )
@Index("idx_20244_IX_tblRTMediaSource",["bRTMediaSourceAddedBy3rdPartyListingFlg","bRTMediaSourceArchivedFlg","intRtMediaSourceAdvertisingSource","intRtMediaSourceAdvertisingType","intRTMediaSourceMediaCompanyContactID","intRTMediaSourceMediaCompanyID","varRTMediaSourceName","varRTMediaSourceStatus",],{unique:true})
export class tblRTMediaSource {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTMediaSourceID"
        })
    intRTMediaSourceID:string;
        

   
    @ManyToOne(type=>tblRTAdvertisingType, tblRTAdvertisingType=>tblRTAdvertisingType.tblRtMediaSources,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTMediaSourceAdvertisingTypeID'})
    intRtMediaSourceAdvertisingType:tblRTAdvertisingType | null;


   
    @ManyToOne(type=>tblRTAdvertisingSource, tblRTAdvertisingSource=>tblRTAdvertisingSource.tblRtMediaSources,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTMediaSourceAdvertisingSourceID'})
    intRtMediaSourceAdvertisingSource:tblRTAdvertisingSource | null;


    @Column("text",{ 
        nullable:false,
        name:"varRTMediaSourceName"
        })
    varRTMediaSourceName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTMediaSourceURL"
        })
    varRTMediaSourceURL:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTMediaSourceMediaCompanyID"
        })
    intRTMediaSourceMediaCompanyID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTMediaSourceMediaCompanyContactID"
        })
    intRTMediaSourceMediaCompanyContactID:number | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varRTMediaSourceStatus"
        })
    varRTMediaSourceStatus:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTMediaSourceArchivedFlg"
        })
    bRTMediaSourceArchivedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTMediaSourceCreatedDate"
        })
    dteRTMediaSourceCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTMediaSourceModifiedDate"
        })
    dteRTMediaSourceModifiedDate:Date;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTMediaSourceContactFirstName"
        })
    varRTMediaSourceContactFirstName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTMediaSourceContactLastName"
        })
    varRTMediaSourceContactLastName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTMediaSourceContactEmail"
        })
    varRTMediaSourceContactEmail:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTMediaSourceContactPhone"
        })
    varRTMediaSourceContactPhone:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTMediaSourceAddedBy3rdPartyListingFlg"
        })
    bRTMediaSourceAddedBy3rdPartyListingFlg:boolean;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
        name:"intRTMediaSourceAPIID"
        })
    intRTMediaSourceAPIID:string;
        

   
    @OneToMany(type=>tblRTDisplayAdGroupMediaSource, tblRTDisplayAdGroupMediaSource=>tblRTDisplayAdGroupMediaSource.intRtDisplayAdGroupMediaSourceRtMediaSource,{ onDelete: 'CASCADE' , })
    tblRtDisplayAdGroupMediaSources:tblRTDisplayAdGroupMediaSource[];
    

   
    @OneToMany(type=>tblRTDisplayNonAPIAdData, tblRTDisplayNonAPIAdData=>tblRTDisplayNonAPIAdData.intRtDisplayNonApiAdDataRtMediaSource,{ onDelete: 'CASCADE' , })
    tblRtDisplayNonApiAdDatas:tblRTDisplayNonAPIAdData[];
    

   
    @OneToMany(type=>tblRTDisplayNonAPIGoalData, tblRTDisplayNonAPIGoalData=>tblRTDisplayNonAPIGoalData.intRtDisplayNonApiGoalDataRtMediaSource,{ onDelete: 'CASCADE' , })
    tblRtDisplayNonApiGoalDatas:tblRTDisplayNonAPIGoalData[];
    

   
    @OneToMany(type=>tblRTEmailMarketingItem, tblRTEmailMarketingItem=>tblRTEmailMarketingItem.intRtEmailMarketingItemRtMediaSource,{ onDelete: 'CASCADE' , })
    tblRtEmailMarketingItems:tblRTEmailMarketingItem[];
    
}
