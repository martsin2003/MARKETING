import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblHomeEstimateOffer} from "./tblHomeEstimateOffer";


@Entity("tblHomeEstimateOfferChangeOrderXRef",{schema:"public" } )
export class tblHomeEstimateOfferChangeOrderXRef {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomeEstimateOfferChangeOrderID"
        })
    intHomeEstimateOfferChangeOrderID:string;
        

   
    @ManyToOne(type=>tblHomeEstimateOffer, tblHomeEstimateOffer=>tblHomeEstimateOffer.tblHomeEstimateOfferChangeOrderXRefs,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intHomeEstimateOfferID'})
    intHomeEstimateOffer:tblHomeEstimateOffer | null;


    @Column("integer",{ 
        nullable:false,
        name:"intChangeOrderID"
        })
    intChangeOrderID:number;
        
}
