import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblContractPlanContractPlanProjectXRef} from "./tblContractPlanContractPlanProjectXRef";


@Entity("tblContractPlan",{schema:"public" } )
export class tblContractPlan {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContractPlanID"
        })
    intContractPlanID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varContractPlanName"
        })
    varContractPlanName:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curContractPlanPriceBase"
        })
    curContractPlanPriceBase:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractPlanComments"
        })
    varContractPlanComments:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varContractPlanStatus"
        })
    varContractPlanStatus:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelPlanProjectID"
        })
    intModelPlanProjectID:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bContractPlanDeleted"
        })
    bContractPlanDeleted:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContractPlanCreatedDate"
        })
    dteContractPlanCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContractPlanModifiedDate"
        })
    dteContractPlanModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractPlanCreatedBy"
        })
    intContractPlanCreatedBy:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractPlanModifiedBy"
        })
    intContractPlanModifiedBy:number;
        

   
    @OneToMany(type=>tblContractPlanContractPlanProjectXRef, tblContractPlanContractPlanProjectXRef=>tblContractPlanContractPlanProjectXRef.intContractPlanContractPlanProjectXRefContractPlan,{ onDelete: 'CASCADE' , })
    tblContractPlanContractPlanProjectXRefs:tblContractPlanContractPlanProjectXRef[];
    
}
