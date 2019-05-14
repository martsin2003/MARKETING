import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFinancePlan} from "./tblFinancePlan";


@Entity("tblFinancePlanLoanType",{schema:"public" } )
@Index("idx_17563_IX_tblFinancePlanLoanType",["intFinancePlanLoanTypeSort","varFinancePlanLoanType",],{unique:true})
export class tblFinancePlanLoanType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFinancePlanLoanTypeID"
        })
    intFinancePlanLoanTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varFinancePlanLoanType"
        })
    varFinancePlanLoanType:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFinancePlanLoanTypeSort"
        })
    intFinancePlanLoanTypeSort:number | null;
        

   
    @OneToMany(type=>tblFinancePlan, tblFinancePlan=>tblFinancePlan.intFinancePlanFinancePlanLoanType,{ onDelete: 'SET NULL' , })
    tblFinancePlans:tblFinancePlan[];
    
}
