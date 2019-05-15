import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblHomeEstimateOffer} from "./tblHomeEstimateOffer";


@Entity("tblHomeEstimateOfferContract",{schema:"public" } )
@Index("idx_18140_IX_tblHomeEstimateOfferContract",["intHomeEstimateOfferContractContractID","intHomeEstimateOfferContractHomeEstimateOffer",],{unique:true})
export class tblHomeEstimateOfferContract {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomeEstimateOfferContractID"
        })
    intHomeEstimateOfferContractID:string;
        

   
    @ManyToOne(type=>tblHomeEstimateOffer, tblHomeEstimateOffer=>tblHomeEstimateOffer.tblHomeEstimateOfferContracts,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intHomeEstimateOfferContractHomeEstimateOfferID'})
    intHomeEstimateOfferContractHomeEstimateOffer:tblHomeEstimateOffer | null;


    @Column("integer",{ 
        nullable:false,
        name:"intHomeEstimateOfferContractContractID"
        })
    intHomeEstimateOfferContractContractID:number;
        
}
