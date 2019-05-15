import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblChangeOrder} from "./tblChangeOrder";


@Entity("tblChangeOrderDetail",{schema:"public" } )
export class tblChangeOrderDetail {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intChangeOrderDetailID"
        })
    intChangeOrderDetailID:string;
        

   
    @ManyToOne(type=>tblChangeOrder, tblChangeOrder=>tblChangeOrder.tblChangeOrderDetails,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intChangeOrderDetailChangeOrderID'})
    intChangeOrderDetailChangeOrder:tblChangeOrder | null;


    @Column("integer",{ 
        nullable:false,
        name:"intChangeOrderDetailHomeEstimateOptionID"
        })
    intChangeOrderDetailHomeEstimateOptionID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intChangeOrderDetailAction"
        })
    intChangeOrderDetailAction:number;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteChangeOrderDetailDate"
        })
    dteChangeOrderDetailDate:Date | null;
        
}
