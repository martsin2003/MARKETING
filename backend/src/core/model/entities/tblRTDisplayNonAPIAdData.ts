import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTMediaSource} from "./tblRTMediaSource";
import {tblRTCampaign} from "./tblRTCampaign";


@Entity("tblRTDisplayNonAPIAdData",{schema:"public" } )
@Index("idx_19851_IX_tblRTDisplayNonAPIAdData",["dteRTDisplayNonAPIAdDataDate","intRTDisplayNonAPIAdDataBounces","intRTDisplayNonAPIAdDataNewUsers","intRTDisplayNonAPIAdDataPageviews","intRtDisplayNonApiAdDataRtCampaign","intRtDisplayNonApiAdDataRtMediaSource","intRTDisplayNonAPIAdDataSessionDuration",],{unique:true})
@Index("idx_19851_IX2_tblRTDisplayNonAPIAdData",["dteRTDisplayNonAPIAdDataDate","intRTDisplayNonAPIAdDataBounces","intRTDisplayNonAPIAdDataNewUsers","intRTDisplayNonAPIAdDataPageviews","intRtDisplayNonApiAdDataRtCampaign","intRtDisplayNonApiAdDataRtMediaSource","intRTDisplayNonAPIAdDataSessionDuration","intRTDisplayNonAPIAdDataSessions",])
export class tblRTDisplayNonAPIAdData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTDisplayNonAPIAdDataID"
        })
    intRTDisplayNonAPIAdDataID:string;
        

   
    @ManyToOne(type=>tblRTMediaSource, tblRTMediaSource=>tblRTMediaSource.tblRtDisplayNonApiAdDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayNonAPIAdDataRTMediaSourceID'})
    intRtDisplayNonApiAdDataRtMediaSource:tblRTMediaSource | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayNonAPIAdDataDate"
        })
    dteRTDisplayNonAPIAdDataDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayNonAPIAdDataImpressions"
        })
    intRTDisplayNonAPIAdDataImpressions:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltRTDisplayNonAPIAdDataNewUserPct"
        })
    fltRTDisplayNonAPIAdDataNewUserPct:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltRTDisplayNonAPIAdDataBounceRate"
        })
    fltRTDisplayNonAPIAdDataBounceRate:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayNonAPIAdDataAvgSessionDuration"
        })
    intRTDisplayNonAPIAdDataAvgSessionDuration:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltRTDisplayNonAPIAdDataAvgPageviews"
        })
    fltRTDisplayNonAPIAdDataAvgPageviews:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayNonAPIAdDataCreatedDate"
        })
    dteRTDisplayNonAPIAdDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayNonAPIAdDataModifiedDate"
        })
    dteRTDisplayNonAPIAdDataModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayNonAPIAdDataSessions"
        })
    intRTDisplayNonAPIAdDataSessions:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayNonAPIAdDataBounces"
        })
    intRTDisplayNonAPIAdDataBounces:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayNonAPIAdDataPageviews"
        })
    intRTDisplayNonAPIAdDataPageviews:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayNonAPIAdDataSessionDuration"
        })
    intRTDisplayNonAPIAdDataSessionDuration:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayNonAPIAdDataNewUsers"
        })
    intRTDisplayNonAPIAdDataNewUsers:number;
        

   
    @ManyToOne(type=>tblRTCampaign, tblRTCampaign=>tblRTCampaign.tblRtDisplayNonApiAdDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayNonAPIAdDataRTCampaignID'})
    intRtDisplayNonApiAdDataRtCampaign:tblRTCampaign | null;


    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTDisplayNonAPIAdDataSessionsNA"
        })
    bRTDisplayNonAPIAdDataSessionsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTDisplayNonAPIAdDataBouncesNA"
        })
    bRTDisplayNonAPIAdDataBouncesNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTDisplayNonAPIAdDataPageviewsNA"
        })
    bRTDisplayNonAPIAdDataPageviewsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTDisplayNonAPIAdDataSessionDurationNA"
        })
    bRTDisplayNonAPIAdDataSessionDurationNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTDisplayNonAPIAdDataNewUsersNA"
        })
    bRTDisplayNonAPIAdDataNewUsersNA:boolean;
        
}
