import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFinancePlanLoanType} from "./tblFinancePlanLoanType";
import {tblPreferredLender} from "./tblPreferredLender";
import {tblHomeEstimateFinancePlan} from "./tblHomeEstimateFinancePlan";
import {tblHomeEstimateFinancePlanXRef} from "./tblHomeEstimateFinancePlanXRef";


@Entity("tblFinancePlan",{schema:"public" } )
@Index("idx_17533_IX_tblFinancePlan",["bFinancePlanMortgageInsLenderPaid","curFinancePlanARMAdjustmentsPct","curFinancePlanARMCapRatePct","curFinancePlanARMIndexRatePct","curFinancePlanFundingFeePct","curFinancePlanInterestRatePct","curFinancePlanMaxLoanAmt","curFinancePlanMinDownPmntPct","curFinancePlanMortgageInsRatePct","intFinancePlanFinancePlanLender","intFinancePlanFinancePlanLoanType","intFinancePlanLoanTerm","intFinancePlanPrepaidInsuranceDays","intFinancePlanPrepaidInterestDays","intFinancePlanPrepaidTaxesDays","varFinancePlanName",],{unique:true})
export class tblFinancePlan {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFinancePlanID"
        })
    intFinancePlanID:string;
        

   
    @ManyToOne(type=>tblFinancePlanLoanType, tblFinancePlanLoanType=>tblFinancePlanLoanType.tblFinancePlans,{ onDelete: 'SET NULL', })
    @JoinColumn({ name:'intFinancePlanFinancePlanLoanTypeID'})
    intFinancePlanFinancePlanLoanType:tblFinancePlanLoanType | null;


   
    @ManyToOne(type=>tblPreferredLender, tblPreferredLender=>tblPreferredLender.tblFinancePlans,{ onDelete: 'SET NULL', })
    @JoinColumn({ name:'intFinancePlanFinancePlanLenderID'})
    intFinancePlanFinancePlanLender:tblPreferredLender | null;


    @Column("text",{ 
        nullable:false,
        name:"varFinancePlanName"
        })
    varFinancePlanName:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanInterestRatePct"
        })
    curFinancePlanInterestRatePct:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFinancePlanInterestRateSemiAnnual"
        })
    bFinancePlanInterestRateSemiAnnual:boolean;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFinancePlanLoanTerm"
        })
    intFinancePlanLoanTerm:number;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanDiscountPointsPct"
        })
    curFinancePlanDiscountPointsPct:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanMortgageInsRatePct"
        })
    curFinancePlanMortgageInsRatePct:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFinancePlanMortgageInsLenderPaid"
        })
    bFinancePlanMortgageInsLenderPaid:boolean;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanEstClosingCostAmt"
        })
    curFinancePlanEstClosingCostAmt:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanEstClosingCostPct"
        })
    curFinancePlanEstClosingCostPct:string;
        

    @Column("numeric",{ 
        nullable:false,
        name:"curFinancePlanFundingFeePct"
        })
    curFinancePlanFundingFeePct:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanMaxLoanAmt"
        })
    curFinancePlanMaxLoanAmt:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanMinDownPmntPct"
        })
    curFinancePlanMinDownPmntPct:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varFinancePlanARMIndex"
        })
    varFinancePlanARMIndex:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanARMMarginPct"
        })
    curFinancePlanARMMarginPct:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curFinancePlanARMCapRatePct"
        })
    curFinancePlanARMCapRatePct:string;
        

    @Column("numeric",{ 
        nullable:false,
        name:"curFinancePlanARMIndexRatePct"
        })
    curFinancePlanARMIndexRatePct:string;
        

    @Column("numeric",{ 
        nullable:false,
        name:"curFinancePlanARMAdjustmentsPct"
        })
    curFinancePlanARMAdjustmentsPct:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFinancePlanPrepaidTaxesDays"
        })
    intFinancePlanPrepaidTaxesDays:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFinancePlanPrepaidInterestDays"
        })
    intFinancePlanPrepaidInterestDays:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFinancePlanPrepaidInsuranceDays"
        })
    intFinancePlanPrepaidInsuranceDays:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFinancePlanStatus"
        })
    varFinancePlanStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFinancePlanCreatedDate"
        })
    dteFinancePlanCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFinancePlanModifiedDate"
        })
    dteFinancePlanModifiedDate:Date;
        

   
    @OneToMany(type=>tblHomeEstimateFinancePlan, tblHomeEstimateFinancePlan=>tblHomeEstimateFinancePlan.intFinancePlan,{ onDelete: 'SET NULL' , })
    tblHomeEstimateFinancePlans:tblHomeEstimateFinancePlan[];
    

   
    @OneToMany(type=>tblHomeEstimateFinancePlanXRef, tblHomeEstimateFinancePlanXRef=>tblHomeEstimateFinancePlanXRef.intFinancePlan,{ onDelete: 'SET NULL' , })
    tblHomeEstimateFinancePlanXRefs:tblHomeEstimateFinancePlanXRef[];
    
}
