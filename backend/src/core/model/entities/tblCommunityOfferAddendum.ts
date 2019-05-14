import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";


@Entity("tblCommunityOfferAddendum",{schema:"public" } )
@Index("idx_16905_IX_tblCommunityOfferAddendum",["dteCommunityOfferAddendumOfferCreatedDate","intCommunityOfferAddendumCommunity","intCommunityOfferAddendumOfferAddendumID",],{unique:true})
export class tblCommunityOfferAddendum {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityOfferAddendumID"
        })
    intCommunityOfferAddendumID:string;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblCommunityOfferAddendums,{  nullable:false, })
    @JoinColumn({ name:'intCommunityOfferAddendumCommunityID'})
    intCommunityOfferAddendumCommunity:tblCommunity | null;


    @Column("integer",{ 
        nullable:false,
        name:"intCommunityOfferAddendumOfferAddendumID"
        })
    intCommunityOfferAddendumOfferAddendumID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityOfferAddendumOfferCreatedDate"
        })
    dteCommunityOfferAddendumOfferCreatedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bCommunityOfferAddendumCheckedByDefaultFlg"
        })
    bCommunityOfferAddendumCheckedByDefaultFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bCommunityOfferAddendumUncheckableFlg"
        })
    bCommunityOfferAddendumUncheckableFlg:boolean;
        
}
