import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFEmergencyContactSubcontractor} from "./tblMBFEmergencyContactSubcontractor";


@Entity("tblMBFEmergencyContactSubcontractorType",{schema:"public" } )
@Index("idx_18444_IX_tblMBFEmergencyContactSubcontractorType",["intMbfEmergencyContactSubcontractorTypeSubcontractor","intMBFEmergencyContactSubcontractorTypeTypeID",],{unique:true})
export class tblMBFEmergencyContactSubcontractorType {

   
    @ManyToOne(type=>tblMBFEmergencyContactSubcontractor, tblMBFEmergencyContactSubcontractor=>tblMBFEmergencyContactSubcontractor.tblMbfEmergencyContactSubcontractorTypes,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFEmergencyContactSubcontractorTypeSubcontractorID'})
    intMbfEmergencyContactSubcontractorTypeSubcontractor:tblMBFEmergencyContactSubcontractor | null;


    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"intMBFEmergencyContactSubcontractorTypeTypeID"
        })
    intMBFEmergencyContactSubcontractorTypeTypeID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFEmergencyContactSubcontractorTypeCreatedDate"
        })
    dteMBFEmergencyContactSubcontractorTypeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFEmergencyContactSubcontractorTypeModifiedDate"
        })
    dteMBFEmergencyContactSubcontractorTypeModifiedDate:Date;
        
}
