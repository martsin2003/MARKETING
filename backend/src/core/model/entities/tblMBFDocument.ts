import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFCategory} from "./tblMBFCategory";


@Entity("tblMBFDocument",{schema:"public" } )
@Index("idx_18415_IX_tblMBFDocument",["intMbfDocumentCategory","varMBFDocumentName","varMBFDocumentState","varMBFDocumentStatus",],{unique:true})
export class tblMBFDocument {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFDocumentID"
        })
    intMBFDocumentID:string;
        

   
    @ManyToOne(type=>tblMBFCategory, tblMBFCategory=>tblMBFCategory.tblMbfDocuments,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFDocumentCategoryID'})
    intMbfDocumentCategory:tblMBFCategory | null;


    @Column("text",{ 
        nullable:false,
        name:"varMBFDocumentName"
        })
    varMBFDocumentName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFDocumentDescription"
        })
    varMBFDocumentDescription:string | null;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFDocumentFilename"
        })
    varMBFDocumentFilename:string;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltMBFDocumentFileSize"
        })
    fltMBFDocumentFileSize:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFDocumentState"
        })
    varMBFDocumentState:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varMBFDocumentStatus"
        })
    varMBFDocumentStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFDocumentCreatedDate"
        })
    dteMBFDocumentCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFDocumentModifiedDate"
        })
    dteMBFDocumentModifiedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMBFDocumentEffectiveDate"
        })
    dteMBFDocumentEffectiveDate:Date | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFDocumentOrder"
        })
    intMBFDocumentOrder:number;
        
}
