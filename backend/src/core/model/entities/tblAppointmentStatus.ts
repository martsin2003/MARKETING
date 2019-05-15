import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblAppointmentStatus",{schema:"public" } )
export class tblAppointmentStatus {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAppointmentStatusID"
        })
    intAppointmentStatusID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varAppointmentStatus"
        })
    varAppointmentStatus:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intAppointmentStatusSort"
        })
    intAppointmentStatusSort:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bUseInOSC"
        })
    bUseInOSC:boolean | null;
        
}
