import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblHomeEstimate} from "./tblHomeEstimate";
import {tblHEOptionGroup} from "./tblHEOptionGroup";
import {tblHEOption} from "./tblHEOption";


@Entity("tblHomeEstimateOption",{schema:"public" } )
export class tblHomeEstimateOption {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomeEstimateOptionID"
        })
    intHomeEstimateOptionID:string;
        

   
    @ManyToOne(type=>tblHomeEstimate, tblHomeEstimate=>tblHomeEstimate.tblHomeEstimateOptions,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intHomeEstimateOptionHomeEstimateID'})
    intHomeEstimateOptionHomeEstimate:tblHomeEstimate | null;


    @Column("text",{ 
        nullable:false,
        default: () => "'C'",
        name:"chrHomeEstimateOptionType"
        })
    chrHomeEstimateOptionType:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varHomeEstimateOptionCode"
        })
    varHomeEstimateOptionCode:string | null;
        

    @Column("text",{ 
        nullable:false,
        name:"varHomeEstimateOptionDesc"
        })
    varHomeEstimateOptionDesc:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curHomeEstimateOptionUnitPrice"
        })
    curHomeEstimateOptionUnitPrice:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intHomeEstimateOptionQty"
        })
    intHomeEstimateOptionQty:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'Cash'",
        name:"varHomeEstimateOptionPayType"
        })
    varHomeEstimateOptionPayType:string;
        

   
    @ManyToOne(type=>tblHEOptionGroup, tblHEOptionGroup=>tblHEOptionGroup.tblHomeEstimateOptions,{  })
    @JoinColumn({ name:'intHomeEstimateOptionHEOptionGroupID'})
    intHomeEstimateOptionHeOptionGroup:tblHEOptionGroup | null;


   
    @ManyToOne(type=>tblHEOption, tblHEOption=>tblHEOption.tblHomeEstimateOptions,{  })
    @JoinColumn({ name:'intHomeEstimateOptionHEOptionID'})
    intHomeEstimateOptionHeOption:tblHEOption | null;


    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteHomeEstimateOptionCreatedDate"
        })
    dteHomeEstimateOptionCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteHomeEstimateOptionModifiedDate"
        })
    dteHomeEstimateOptionModifiedDate:Date | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bHomeEstimateOptionDeleted"
        })
    bHomeEstimateOptionDeleted:boolean;
        

    @Column("integer",{ 
        nullable:false,
        name:"intHomeEstimateOptionQtyLast"
        })
    intHomeEstimateOptionQtyLast:number;
        
}
