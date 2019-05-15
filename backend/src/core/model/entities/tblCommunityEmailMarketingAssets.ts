import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";


@Entity("tblCommunityEmailMarketingAssets",{schema:"public" } )
export class tblCommunityEmailMarketingAssets {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityEmailMarketingAssetsID"
        })
    intCommunityEmailMarketingAssetsID:string;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblCommunityEmailMarketingAssetss,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intCommunityEmailMarketingAssetsCommunityID'})
    intCommunityEmailMarketingAssetsCommunity:tblCommunity | null;


    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsCommunityLogo"
        })
    varCommunityEmailMarketingAssetsCommunityLogo:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsConsumerHeaderGraphic"
        })
    varCommunityEmailMarketingAssetsConsumerHeaderGraphic:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsConsumerHeaderCopy"
        })
    varCommunityEmailMarketingAssetsConsumerHeaderCopy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsConsumerDisclaimerCopy"
        })
    varCommunityEmailMarketingAssetsConsumerDisclaimerCopy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsRealtorHeaderGraphic"
        })
    varCommunityEmailMarketingAssetsRealtorHeaderGraphic:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsRealtorHeaderCopy"
        })
    varCommunityEmailMarketingAssetsRealtorHeaderCopy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsRealtorIncentivesCopy"
        })
    varCommunityEmailMarketingAssetsRealtorIncentivesCopy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsRealtorBonusCopy"
        })
    varCommunityEmailMarketingAssetsRealtorBonusCopy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsRealtorDisclaimerCopy"
        })
    varCommunityEmailMarketingAssetsRealtorDisclaimerCopy:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityEmailMarketingAssetsCreatedDate"
        })
    dteCommunityEmailMarketingAssetsCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityEmailMarketingAssetsModifiedDate"
        })
    dteCommunityEmailMarketingAssetsModifiedDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsConsumerIncentivesCopy"
        })
    varCommunityEmailMarketingAssetsConsumerIncentivesCopy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmailMarketingAssetsRealtorCommissionCopy"
        })
    varCommunityEmailMarketingAssetsRealtorCommissionCopy:string | null;
        
}
