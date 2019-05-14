import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFLotAppointment} from "./tblMBFLotAppointment";
import {tblMBFBuyer} from "./tblMBFBuyer";
import {tblMBFAppointmentBuyerStatus} from "./tblMBFAppointmentBuyerStatus";


@Entity("tblMBFAppointmentBuyer",{schema:"public" } )
@Index("idx_18293_IX_tblMBFAppointmentBuyer",["dteMBFAppointmentBuyerModifiedDate","intMbfAppointmentBuyerAppointment","intMbfAppointmentBuyerBuyer","intMBFAppointmentBuyerID","intMbfAppointmentBuyerStatus",],{unique:true})
export class tblMBFAppointmentBuyer {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFAppointmentBuyerID"
        })
    intMBFAppointmentBuyerID:string;
        

   
    @ManyToOne(type=>tblMBFLotAppointment, tblMBFLotAppointment=>tblMBFLotAppointment.tblMbfAppointmentBuyers,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFAppointmentBuyerAppointmentID'})
    intMbfAppointmentBuyerAppointment:tblMBFLotAppointment | null;


   
    @ManyToOne(type=>tblMBFBuyer, tblMBFBuyer=>tblMBFBuyer.tblMbfAppointmentBuyers,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFAppointmentBuyerBuyerID'})
    intMbfAppointmentBuyerBuyer:tblMBFBuyer | null;


   
    @ManyToOne(type=>tblMBFAppointmentBuyerStatus, tblMBFAppointmentBuyerStatus=>tblMBFAppointmentBuyerStatus.tblMbfAppointmentBuyers,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFAppointmentBuyerStatusID'})
    intMbfAppointmentBuyerStatus:tblMBFAppointmentBuyerStatus | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFAppointmentBuyerCreatedDate"
        })
    dteMBFAppointmentBuyerCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFAppointmentBuyerModifiedDate"
        })
    dteMBFAppointmentBuyerModifiedDate:Date;
        
}
