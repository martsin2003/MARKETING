import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTEmailMarketingItem} from "./tblRTEmailMarketingItem";


@Entity("tblRTEmailMarketingItemRead",{schema:"public" } )
@Index("idx_19946_IX_tblRTEmailMarketingItemRead",["intRTEmailMarketingItemReadCampaignAPIID","intRTEmailMarketingItemReadCampaignID","intRtEmailMarketingItemReadItem",],{unique:true})
export class tblRTEmailMarketingItemRead {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTEmailMarketingItemReadID"
        })
    intRTEmailMarketingItemReadID:string;
        

   
    @ManyToOne(type=>tblRTEmailMarketingItem, tblRTEmailMarketingItem=>tblRTEmailMarketingItem.tblRtEmailMarketingItemReads,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTEmailMarketingItemReadItemID'})
    intRtEmailMarketingItemReadItem:tblRTEmailMarketingItem | null;


    @Column("bigint",{ 
        nullable:false,
        name:"intRTEmailMarketingItemReadCampaignAPIID"
        })
    intRTEmailMarketingItemReadCampaignAPIID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTEmailMarketingItemReadCampaignID"
        })
    intRTEmailMarketingItemReadCampaignID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTEmailMarketingItemReadRecordCount"
        })
    intRTEmailMarketingItemReadRecordCount:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailMarketingItemReadCreatedDate"
        })
    dteRTEmailMarketingItemReadCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailMarketingItemReadModifiedDate"
        })
    dteRTEmailMarketingItemReadModifiedDate:Date;
        
}
