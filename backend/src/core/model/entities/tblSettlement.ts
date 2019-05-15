import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblTrafficReport} from "./tblTrafficReport";


@Entity("tblSettlement",{schema:"public" } )
export class tblSettlement {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"lngSettlementID"
        })
    lngSettlementID:string;
        

   
    @ManyToOne(type=>tblTrafficReport, tblTrafficReport=>tblTrafficReport.tblSettlements,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'lngTrafficReportID'})
    lngTrafficReport:tblTrafficReport | null;


    @Column("text",{ 
        nullable:true,
        name:"txtSettlementBuyerLastName"
        })
    txtSettlementBuyerLastName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSettlementLotNbr"
        })
    txtSettlementLotNbr:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngSettlementDate"
        })
    lngSettlementDate:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curSettlementPrice"
        })
    curSettlementPrice:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngSettlementCnt"
        })
    lngSettlementCnt:number | null;
        
}
