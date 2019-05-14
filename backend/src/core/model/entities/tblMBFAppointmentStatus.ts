import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFLotAppointment} from "./tblMBFLotAppointment";


@Entity("tblMBFAppointmentStatus",{schema:"public" } )
export class tblMBFAppointmentStatus {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFAppointmentStatusID"
        })
    intMBFAppointmentStatusID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFAppointmentStatus"
        })
    varMBFAppointmentStatus:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFAppointmentStatusSort"
        })
    intMBFAppointmentStatusSort:number;
        

   
    @OneToMany(type=>tblMBFLotAppointment, tblMBFLotAppointment=>tblMBFLotAppointment.intMbfLotAppointmentStatus,{ onDelete: 'CASCADE' , })
    tblMbfLotAppointments:tblMBFLotAppointment[];
    
}
