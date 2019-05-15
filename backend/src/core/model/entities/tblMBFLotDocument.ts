import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFLot} from "./tblMBFLot";
import {tblMBFCategory} from "./tblMBFCategory";


@Entity("tblMBFLotDocument",{schema:"public" } )
@Index("idx_18491_IX_tblMBFLotDocument",["bMBFLotDocumentIsHomeSpecific","dteMBFLotDocumentModifiedDate","intMbfLotDocumentCategory","intMBFLotDocumentID","intMbfLotDocumentLot","intMBFLotDocumentPhaseID","varMBFLotDocumentName","varMBFLotDocumentStatus",],{unique:true})
export class tblMBFLotDocument {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFLotDocumentID"
        })
    intMBFLotDocumentID:string;
        

   
    @ManyToOne(type=>tblMBFLot, tblMBFLot=>tblMBFLot.tblMbfLotDocuments,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFLotDocumentLotID'})
    intMbfLotDocumentLot:tblMBFLot | null;


    @Column("integer",{ 
        nullable:false,
        name:"intMBFLotDocumentPhaseID"
        })
    intMBFLotDocumentPhaseID:number;
        

   
    @ManyToOne(type=>tblMBFCategory, tblMBFCategory=>tblMBFCategory.tblMbfLotDocuments,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFLotDocumentCategoryID'})
    intMbfLotDocumentCategory:tblMBFCategory | null;


    @Column("text",{ 
        nullable:false,
        name:"varMBFLotDocumentName"
        })
    varMBFLotDocumentName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFLotDocumentDescription"
        })
    varMBFLotDocumentDescription:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFLotDocumentFileName"
        })
    varMBFLotDocumentFileName:string | null;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltMBFLotDocumentFileSize"
        })
    fltMBFLotDocumentFileSize:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'Active'",
        name:"varMBFLotDocumentStatus"
        })
    varMBFLotDocumentStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLotDocumentCreatedDate"
        })
    dteMBFLotDocumentCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLotDocumentModifiedDate"
        })
    dteMBFLotDocumentModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFLotDocumentIsHomeSpecific"
        })
    bMBFLotDocumentIsHomeSpecific:boolean;
        
}
