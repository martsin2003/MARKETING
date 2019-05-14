import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblHomeEstimateOffer} from "./tblHomeEstimateOffer";
import {tblOfferAddendum} from "./tblOfferAddendum";


@Entity("tblHomeEstimateOfferAddendum",{schema:"public" } )
@Index("idx_18128_IX_tblHomeEstimateOfferAddendum",["dteOfferAddendumCreatedDate","intHomeEstimateOffer","intOfferAddendum",],{unique:true})
export class tblHomeEstimateOfferAddendum {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomeEstimateOfferAddendumID"
        })
    intHomeEstimateOfferAddendumID:string;
        

   
    @ManyToOne(type=>tblHomeEstimateOffer, tblHomeEstimateOffer=>tblHomeEstimateOffer.tblHomeEstimateOfferAddendums,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intHomeEstimateOfferID'})
    intHomeEstimateOffer:tblHomeEstimateOffer | null;


   
    @ManyToOne(type=>tblOfferAddendum, tblOfferAddendum=>tblOfferAddendum.tblHomeEstimateOfferAddendums,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intOfferAddendumID'})
    intOfferAddendum:tblOfferAddendum | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteOfferAddendumCreatedDate"
        })
    dteOfferAddendumCreatedDate:Date;
        
}
