import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTFBAIAdSet} from "./tblRTFBAIAdSet";
import {tblRTFBAIData} from "./tblRTFBAIData";
import {tblRTFBAILabeledData} from "./tblRTFBAILabeledData";


@Entity("tblRTFBAIAd",{schema:"public" } )
@Index("idx_19982_IX_tblRTFBAIAd",["dteRTFBAIAdEndDate","dteRTFBAIAdStartDate","intRTFBAIAdFBAdID","intRtfbaiAdRtfbaiAdSet",],{unique:true})
export class tblRTFBAIAd {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTFBAIAdID"
        })
    intRTFBAIAdID:string;
        

   
    @ManyToOne(type=>tblRTFBAIAdSet, tblRTFBAIAdSet=>tblRTFBAIAdSet.tblRtfbaiAds,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTFBAIAdRTFBAIAdSetID'})
    intRtfbaiAdRtfbaiAdSet:tblRTFBAIAdSet | null;


    @Column("bigint",{ 
        nullable:false,
        name:"intRTFBAIAdFBAdID"
        })
    intRTFBAIAdFBAdID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTFBAIAdName"
        })
    varRTFBAIAdName:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varRTFBAIAdStatus"
        })
    varRTFBAIAdStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAIAdStartDate"
        })
    dteRTFBAIAdStartDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAIAdEndDate"
        })
    dteRTFBAIAdEndDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAIAdCreatedDate"
        })
    dteRTFBAIAdCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAIAdModifiedDate"
        })
    dteRTFBAIAdModifiedDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTFBAIAdUTMSource"
        })
    varRTFBAIAdUTMSource:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTFBAIAdUTMMedium"
        })
    varRTFBAIAdUTMMedium:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTFBAIAdUTMContent"
        })
    varRTFBAIAdUTMContent:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTFBAIAdUTMCampaign"
        })
    varRTFBAIAdUTMCampaign:string | null;
        

   
    @OneToMany(type=>tblRTFBAIData, tblRTFBAIData=>tblRTFBAIData.intRtfbaiDataRtfbaiAd,{ onDelete: 'CASCADE' , })
    tblRtfbaiDatas:tblRTFBAIData[];
    

   
    @OneToMany(type=>tblRTFBAILabeledData, tblRTFBAILabeledData=>tblRTFBAILabeledData.intRtfbaiLabeledDataRtfbaiAd,{ onDelete: 'CASCADE' , })
    tblRtfbaiLabeledDatas:tblRTFBAILabeledData[];
    
}
