import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTConfigSite} from "./tblRTConfigSite";
import {tblRTCredentialProvider} from "./tblRTCredentialProvider";


@Entity("tblRTPaidSearchBudget",{schema:"public" } )
@Index("idx_20304_IX_tblRTPaidSearchBudget",["curRTPaidSearchBudgetAmt","intRTPaidSearchBudgetMonth","intRtPaidSearchBudgetRtConfigSite","intRtPaidSearchBudgetRtCredentialProvider","intRTPaidSearchBudgetYear","varRTPaidSearchBudgetStatus","varRTPaidSearchBudgetYearType",],{unique:true})
@Index("idx_20304_IX2_tblRTPaidSearchBudget",["curRTPaidSearchBudgetAmt","intRTPaidSearchBudgetMonth","intRtPaidSearchBudgetRtCredentialProvider","intRTPaidSearchBudgetYear",])
export class tblRTPaidSearchBudget {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTPaidSearchBudgetID"
        })
    intRTPaidSearchBudgetID:string;
        

   
    @ManyToOne(type=>tblRTConfigSite, tblRTConfigSite=>tblRTConfigSite.tblRtPaidSearchBudgets,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchBudgetRTConfigSiteID'})
    intRtPaidSearchBudgetRtConfigSite:tblRTConfigSite | null;


   
    @ManyToOne(type=>tblRTCredentialProvider, tblRTCredentialProvider=>tblRTCredentialProvider.tblRtPaidSearchBudgets,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchBudgetRTCredentialProviderID'})
    intRtPaidSearchBudgetRtCredentialProvider:tblRTCredentialProvider | null;


    @Column("text",{ 
        nullable:false,
        default: () => "'C'",
        name:"varRTPaidSearchBudgetYearType"
        })
    varRTPaidSearchBudgetYearType:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTPaidSearchBudgetYear"
        })
    intRTPaidSearchBudgetYear:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTPaidSearchBudgetMonth"
        })
    intRTPaidSearchBudgetMonth:number;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curRTPaidSearchBudgetAmt"
        })
    curRTPaidSearchBudgetAmt:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varRTPaidSearchBudgetStatus"
        })
    varRTPaidSearchBudgetStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchBudgetCreatedDate"
        })
    dteRTPaidSearchBudgetCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchBudgetModifiedDate"
        })
    dteRTPaidSearchBudgetModifiedDate:Date;
        
}
