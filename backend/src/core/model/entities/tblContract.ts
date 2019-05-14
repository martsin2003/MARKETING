import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblContract",{schema:"public" } )
export class tblContract {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContractID"
        })
    intContractID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractContactID"
        })
    intContractContactID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractBuyers"
        })
    varContractBuyers:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varcContractHomesite"
        })
    varcContractHomesite:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractDate"
        })
    dteContractDate:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContractModelID"
        })
    intContractModelID:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bContractRealtor"
        })
    bContractRealtor:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bContractHomeToSell"
        })
    bContractHomeToSell:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractSource"
        })
    varContractSource:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curContractSalePrice"
        })
    curContractSalePrice:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContractCommunityID"
        })
    intContractCommunityID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractCancellationDate"
        })
    dteContractCancellationDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractSchSettlementDate"
        })
    dteContractSchSettlementDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractActSettlementDate"
        })
    dteContractActSettlementDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractType"
        })
    varContractType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractRealtor"
        })
    varContractRealtor:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractHomeToSell"
        })
    varContractHomeToSell:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractModelName"
        })
    varContractModelName:string | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'No'",
        name:"varContractDeposit"
        })
    varContractDeposit:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractHomeType"
        })
    varContractHomeType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractCommunityName"
        })
    varContractCommunityName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtContractCancellationComments"
        })
    txtContractCancellationComments:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContractRatificationDate"
        })
    dteContractRatificationDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractRatificationComments"
        })
    varContractRatificationComments:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bContractCancellationHOADocsReturned"
        })
    bContractCancellationHOADocsReturned:boolean | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curContractCancellationRefundDueAmt"
        })
    curContractCancellationRefundDueAmt:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContractCancellationRefundAddress"
        })
    varContractCancellationRefundAddress:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractSalesRepID"
        })
    intContractSalesRepID:number;
        
}
