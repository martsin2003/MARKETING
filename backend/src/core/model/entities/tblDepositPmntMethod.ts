import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblHomeEstimateFinancePlanDeposit} from "./tblHomeEstimateFinancePlanDeposit";


@Entity("tblDepositPmntMethod",{schema:"public" } )
@Index("idx_17397_IX_tblDepositPmntMethod",["intDepositPmntMethodSort","varDepositPmntMethod",],{unique:true})
export class tblDepositPmntMethod {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intDepositPmntMethodID"
        })
    intDepositPmntMethodID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varDepositPmntMethod"
        })
    varDepositPmntMethod:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intDepositPmntMethodSort"
        })
    intDepositPmntMethodSort:number | null;
        

   
    @OneToMany(type=>tblHomeEstimateFinancePlanDeposit, tblHomeEstimateFinancePlanDeposit=>tblHomeEstimateFinancePlanDeposit.intDepositDepositPmntMethod,{ onDelete: 'SET NULL' , })
    tblHomeEstimateFinancePlanDeposits:tblHomeEstimateFinancePlanDeposit[];
    
}
