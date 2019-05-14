import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTCampaign} from "./tblRTCampaign";
import {tblRTPaidSearchAd} from "./tblRTPaidSearchAd";
import {tblRTPaidSearchKeyword} from "./tblRTPaidSearchKeyword";


@Entity("tblRTPaidSearchAdGroup",{schema:"public" } )
@Index("idx_20292_IX2_tblRTPaidSearchAdGroup",["intRTPaidSearchAdGroupAPIID","intRTPaidSearchAdGroupID","intRtPaidSearchAdGroupRtCampaign","varRTPaidSearchAdGroupStatus",])
@Index("idx_20292_IX_tblRTPaidSearchAdGroup",["intRTPaidSearchAdGroupAPIID","intRtPaidSearchAdGroupRtCampaign","varRTPaidSearchAdGroupName","varRTPaidSearchAdGroupStatus",],{unique:true})
export class tblRTPaidSearchAdGroup {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTPaidSearchAdGroupID"
        })
    intRTPaidSearchAdGroupID:string;
        

   
    @ManyToOne(type=>tblRTCampaign, tblRTCampaign=>tblRTCampaign.tblRtPaidSearchAdGroups,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchAdGroupRTCampaignID'})
    intRtPaidSearchAdGroupRtCampaign:tblRTCampaign | null;


    @Column("bigint",{ 
        nullable:false,
        name:"intRTPaidSearchAdGroupAPIID"
        })
    intRTPaidSearchAdGroupAPIID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTPaidSearchAdGroupName"
        })
    varRTPaidSearchAdGroupName:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'eligible'",
        name:"varRTPaidSearchAdGroupStatus"
        })
    varRTPaidSearchAdGroupStatus:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'enabled'",
        name:"varRTPaidSearchAdGroupState"
        })
    varRTPaidSearchAdGroupState:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'standard'",
        name:"varRTPaidSearchAdGroupType"
        })
    varRTPaidSearchAdGroupType:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchAdGroupCreatedDate"
        })
    dteRTPaidSearchAdGroupCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchAdGroupModifiedDate"
        })
    dteRTPaidSearchAdGroupModifiedDate:Date;
        

   
    @OneToMany(type=>tblRTPaidSearchAd, tblRTPaidSearchAd=>tblRTPaidSearchAd.intRtPaidSearchAdRtPaidSearchAdGroup,{ onDelete: 'CASCADE' , })
    tblRtPaidSearchAds:tblRTPaidSearchAd[];
    

   
    @OneToMany(type=>tblRTPaidSearchKeyword, tblRTPaidSearchKeyword=>tblRTPaidSearchKeyword.intRtPaidSearchKeywordRtPaidSearchAdGroup,{ onDelete: 'CASCADE' , })
    tblRtPaidSearchKeywords:tblRTPaidSearchKeyword[];
    
}
