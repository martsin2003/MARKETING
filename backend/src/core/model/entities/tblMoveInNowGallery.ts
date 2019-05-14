import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblMoveInNowGallery",{schema:"public" } )
@Index("idx_18995_IX_tblMoveInNowGallery_category",["intMoveInNowGalleryMoveInNowID","varMoveInNowGalleryCategory",])
export class tblMoveInNowGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMoveInNowGalleryID"
        })
    intMoveInNowGalleryID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intMoveInNowGalleryMoveInNowID"
        })
    intMoveInNowGalleryMoveInNowID:number | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'Exterior'",
        name:"varMoveInNowGalleryCategory"
        })
    varMoveInNowGalleryCategory:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMoveInNowGalleryCaption"
        })
    varMoveInNowGalleryCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMoveInNowGalleryImageFile"
        })
    varMoveInNowGalleryImageFile:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intMoveInNowGalleryNavOrder"
        })
    intMoveInNowGalleryNavOrder:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bMoveInNowGalleryDefault"
        })
    bMoveInNowGalleryDefault:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMoveInNowGalleryCreatedDate"
        })
    dteMoveInNowGalleryCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMoveInNowGalleryModifiedDate"
        })
    dteMoveInNowGalleryModifiedDate:Date | null;
        
}
