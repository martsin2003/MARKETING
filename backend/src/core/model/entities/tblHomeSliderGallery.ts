import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblHomeSliderGallery",{schema:"public" } )
export class tblHomeSliderGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomeSliderGalleryID"
        })
    intHomeSliderGalleryID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intHomeSliderGalleryCategoryID"
        })
    intHomeSliderGalleryCategoryID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varHomeSliderGalleryCaption"
        })
    varHomeSliderGalleryCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varHomeSliderGalleryImageFile"
        })
    varHomeSliderGalleryImageFile:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intHomeSliderGalleryNavOrder"
        })
    intHomeSliderGalleryNavOrder:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bHomeSliderGalleryDefault"
        })
    bHomeSliderGalleryDefault:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteHomeSliderGalleryCreatedDate"
        })
    dteHomeSliderGalleryCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteHomeSliderGalleryModifiedDate"
        })
    dteHomeSliderGalleryModifiedDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'Active'",
        name:"varHomeSliderGalleryStatus"
        })
    varHomeSliderGalleryStatus:string | null;
        
}
