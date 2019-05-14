import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFLot} from "./tblMBFLot";


@Entity("tblMBFLotGallery",{schema:"public" } )
@Index("idx_18513_IX_tblMBFLotGallery",["bMBFLotGalleryDefault","dteMBFLotGalleryModifiedDate","intMBFLotGalleryID","intMbfLotGalleryLot","intMBFLotGalleryNavOrder","varMBFLotGalleryCaption","varMBFLotGalleryCategory","varMBFLotGalleryImageFile",],{unique:true})
export class tblMBFLotGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFLotGalleryID"
        })
    intMBFLotGalleryID:string;
        

   
    @ManyToOne(type=>tblMBFLot, tblMBFLot=>tblMBFLot.tblMbfLotGallerys,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFLotGalleryLotID'})
    intMbfLotGalleryLot:tblMBFLot | null;


    @Column("text",{ 
        nullable:false,
        default: () => "'Exterior'",
        name:"varMBFLotGalleryCategory"
        })
    varMBFLotGalleryCategory:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFLotGalleryCaption"
        })
    varMBFLotGalleryCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFLotGalleryImageFile"
        })
    varMBFLotGalleryImageFile:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFLotGalleryNavOrder"
        })
    intMBFLotGalleryNavOrder:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFLotGalleryDefault"
        })
    bMBFLotGalleryDefault:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLotGalleryCreatedDate"
        })
    dteMBFLotGalleryCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLotGalleryModifiedDate"
        })
    dteMBFLotGalleryModifiedDate:Date;
        
}
