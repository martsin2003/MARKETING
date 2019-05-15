import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblDepositType} from "./tblDepositType";
import {tblDepositPmntMethod} from "./tblDepositPmntMethod";
import {tblHomeEstimateFinancePlanDepositXRef} from "./tblHomeEstimateFinancePlanDepositXRef";


@Entity("tblHomeEstimateFinancePlanDeposit",{schema:"public" } )
export class tblHomeEstimateFinancePlanDeposit {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intDepositID"
        })
    intDepositID:string;
        

   
    @ManyToOne(type=>tblDepositType, tblDepositType=>tblDepositType.tblHomeEstimateFinancePlanDeposits,{ onDelete: 'SET NULL', })
    @JoinColumn({ name:'intDepositDepositTypeID'})
    intDepositDepositType:tblDepositType | null;


   
    @ManyToOne(type=>tblDepositPmntMethod, tblDepositPmntMethod=>tblDepositPmntMethod.tblHomeEstimateFinancePlanDeposits,{ onDelete: 'SET NULL', })
    @JoinColumn({ name:'intDepositDepositPmntMethodID'})
    intDepositDepositPmntMethod:tblDepositPmntMethod | null;


    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curDepositAmt"
        })
    curDepositAmt:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intDepositPmntCheckNumber"
        })
    intDepositPmntCheckNumber:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteDepositDueDate"
        })
    dteDepositDueDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteDepositPaidDate"
        })
    dteDepositPaidDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtDepositNote"
        })
    txtDepositNote:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteDepositCreatedDate"
        })
    dteDepositCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteDepositModifiedDate"
        })
    dteDepositModifiedDate:Date;
        

   
    @OneToMany(type=>tblHomeEstimateFinancePlanDepositXRef, tblHomeEstimateFinancePlanDepositXRef=>tblHomeEstimateFinancePlanDepositXRef.intDeposit,{ onDelete: 'CASCADE' , })
    tblHomeEstimateFinancePlanDepositXRefs:tblHomeEstimateFinancePlanDepositXRef[];
    
}
