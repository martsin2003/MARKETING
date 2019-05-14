import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblEmpowerAboutGallery",{schema:"public" } )
@Index("idx_17480_IX_tblEmpowerAboutGallery",["intEmpowerAboutGalleryID","intEmpowerAboutGallerySequence","varEmpowerAboutGalleryCaption","varEmpowerAboutGalleryFilename","varEmpowerAboutGalleryStatus",],{unique:true})
export class tblEmpowerAboutGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intEmpowerAboutGalleryID"
        })
    intEmpowerAboutGalleryID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varEmpowerAboutGalleryFilename"
        })
    varEmpowerAboutGalleryFilename:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmpowerAboutGalleryCaption"
        })
    varEmpowerAboutGalleryCaption:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varEmpowerAboutGalleryStatus"
        })
    varEmpowerAboutGalleryStatus:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intEmpowerAboutGallerySequence"
        })
    intEmpowerAboutGallerySequence:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteEmpowerAboutGalleryCreatedDate"
        })
    dteEmpowerAboutGalleryCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteEmpowerAboutGalleryModifiedDate"
        })
    dteEmpowerAboutGalleryModifiedDate:Date;
        
}
