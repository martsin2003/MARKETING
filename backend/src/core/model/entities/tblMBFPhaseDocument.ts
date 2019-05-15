import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFLotPhaseDocument} from "./tblMBFLotPhaseDocument";


@Entity("tblMBFPhaseDocument",{schema:"public" } )
@Index("idx_18634_IX_tblMBFPhaseDocument",["dteMBFPhaseDocumentModifiedDate","intMBFPhaseDocumentCategoryID","intMBFPhaseDocumentID","intMBFPhaseDocumentPhaseID","varMBFPhaseDocumentName","varMBFPhaseDocumentStatus",],{unique:true})
export class tblMBFPhaseDocument {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFPhaseDocumentID"
        })
    intMBFPhaseDocumentID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFPhaseDocumentPhaseID"
        })
    intMBFPhaseDocumentPhaseID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFPhaseDocumentCategoryID"
        })
    intMBFPhaseDocumentCategoryID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFPhaseDocumentName"
        })
    varMBFPhaseDocumentName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFPhaseDocumentDescription"
        })
    varMBFPhaseDocumentDescription:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFPhaseDocumentFileName"
        })
    varMBFPhaseDocumentFileName:string | null;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltMBFPhaseDocumentFileSize"
        })
    fltMBFPhaseDocumentFileSize:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'Active'",
        name:"varMBFPhaseDocumentStatus"
        })
    varMBFPhaseDocumentStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFPhaseDocumentCreatedDate"
        })
    dteMBFPhaseDocumentCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFPhaseDocumentModifiedDate"
        })
    dteMBFPhaseDocumentModifiedDate:Date;
        

   
    @OneToMany(type=>tblMBFLotPhaseDocument, tblMBFLotPhaseDocument=>tblMBFLotPhaseDocument.intMbfLotPhaseDocumentDocument,{ onDelete: 'CASCADE' , })
    tblMbfLotPhaseDocuments:tblMBFLotPhaseDocument[];
    
}
