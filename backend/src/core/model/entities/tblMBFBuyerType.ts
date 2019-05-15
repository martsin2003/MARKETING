import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFBuyer} from "./tblMBFBuyer";


@Entity("tblMBFBuyerType",{schema:"public" } )
export class tblMBFBuyerType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFBuyerTypeID"
        })
    intMBFBuyerTypeID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFBuyerType"
        })
    varMBFBuyerType:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFBuyerTypeSort"
        })
    intMBFBuyerTypeSort:number;
        

   
    @OneToMany(type=>tblMBFBuyer, tblMBFBuyer=>tblMBFBuyer.intMbfBuyerType,{ onDelete: 'CASCADE' , })
    tblMbfBuyers:tblMBFBuyer[];
    
}
