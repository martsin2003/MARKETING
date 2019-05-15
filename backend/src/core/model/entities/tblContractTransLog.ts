import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblContractTransLog",{schema:"public" } )
export class tblContractTransLog {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContractTransLogID"
        })
    intContractTransLogID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractTransLogContactID"
        })
    intContractTransLogContactID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContractTransLogDate"
        })
    dteContractTransLogDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractTransLogContractDate"
        })
    dteContractTransLogContractDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogHomesite"
        })
    varContractTransLogHomesite:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curContractTransLogSalePrice"
        })
    curContractTransLogSalePrice:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractTransLogCommunityID"
        })
    intContractTransLogCommunityID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractTransLogCancellationDate"
        })
    dteContractTransLogCancellationDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractTransLogSchSettlementDate"
        })
    dteContractTransLogSchSettlementDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogType"
        })
    varContractTransLogType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogModelName"
        })
    varContractTransLogModelName:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'no'",
        name:"varContractTransLogDeposit"
        })
    varContractTransLogDeposit:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogHomeType"
        })
    varContractTransLogHomeType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtContractTransLogCancellationComments"
        })
    txtContractTransLogCancellationComments:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractTransLogSalesRepID"
        })
    intContractTransLogSalesRepID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractTransLogPostedSalesRepID"
        })
    intContractTransLogPostedSalesRepID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractTransLogModelID"
        })
    intContractTransLogModelID:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bContractTransLogRealtor"
        })
    bContractTransLogRealtor:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bContractTransLogHomeToSell"
        })
    bContractTransLogHomeToSell:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogSource"
        })
    varContractTransLogSource:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogRealtor"
        })
    varContractTransLogRealtor:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogHomeToSell"
        })
    varContractTransLogHomeToSell:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogCancellationComments"
        })
    varContractTransLogCancellationComments:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bContractTransLogCancellationHOADocsReturned"
        })
    bContractTransLogCancellationHOADocsReturned:boolean;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curContractTransLogCancellationRefundDueAmt"
        })
    curContractTransLogCancellationRefundDueAmt:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractTransLogCancellationRefundAddress"
        })
    varContractTransLogCancellationRefundAddress:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractTransLogContractID"
        })
    intContractTransLogContractID:number;
        
}
