import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFLotToDo} from "./tblMBFLotToDo";


@Entity("tblMBFLotToDoAssociation",{schema:"public" } )
@Index("idx_18551_IX_tblMBFLotToDoAssociation",["dteMBFLotToDoAssociationModifiedDate","intMBFLotToDoAssociationDocumentCategoryID","intMBFLotToDoAssociationID","intMBFLotToDoAssociationToDoAssociationID","intMbfLotToDoAssociationToDo","intMBFLotToDoAssociationToDoTypeID",],{unique:true})
export class tblMBFLotToDoAssociation {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFLotToDoAssociationID"
        })
    intMBFLotToDoAssociationID:string;
        

   
    @ManyToOne(type=>tblMBFLotToDo, tblMBFLotToDo=>tblMBFLotToDo.tblMbfLotToDoAssociations,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFLotToDoAssociationToDoID'})
    intMbfLotToDoAssociationToDo:tblMBFLotToDo | null;


    @Column("integer",{ 
        nullable:false,
        name:"intMBFLotToDoAssociationToDoAssociationID"
        })
    intMBFLotToDoAssociationToDoAssociationID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFLotToDoAssociationToDoTypeID"
        })
    intMBFLotToDoAssociationToDoTypeID:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"intMBFLotToDoAssociationDocumentCategoryID"
        })
    intMBFLotToDoAssociationDocumentCategoryID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLotToDoAssociationCreatedDate"
        })
    dteMBFLotToDoAssociationCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLotToDoAssociationModifiedDate"
        })
    dteMBFLotToDoAssociationModifiedDate:Date;
        
}
