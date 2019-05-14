import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFLot} from "./tblMBFLot";
import {tblMBFPhaseDocument} from "./tblMBFPhaseDocument";


@Entity("tblMBFLotPhaseDocument",{schema:"public" } )
@Index("idx_18534_IX_tblMBFLotPhaseDocument",["intMbfLotPhaseDocumentDocument","intMBFLotPhaseDocumentID","intMbfLotPhaseDocumentLot",],{unique:true})
export class tblMBFLotPhaseDocument {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFLotPhaseDocumentID"
        })
    intMBFLotPhaseDocumentID:string;
        

   
    @ManyToOne(type=>tblMBFLot, tblMBFLot=>tblMBFLot.tblMbfLotPhaseDocuments,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFLotPhaseDocumentLotID'})
    intMbfLotPhaseDocumentLot:tblMBFLot | null;


   
    @ManyToOne(type=>tblMBFPhaseDocument, tblMBFPhaseDocument=>tblMBFPhaseDocument.tblMbfLotPhaseDocuments,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFLotPhaseDocumentDocumentID'})
    intMbfLotPhaseDocumentDocument:tblMBFPhaseDocument | null;

}
