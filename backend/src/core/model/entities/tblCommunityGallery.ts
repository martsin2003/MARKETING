import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityGallery",{schema:"public" } )
export class tblCommunityGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityGalleryID"
        })
    intCommunityGalleryID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityGalleryCommunityID"
        })
    intCommunityGalleryCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityGalleryCaption"
        })
    varCommunityGalleryCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityGalleryImageFile"
        })
    varCommunityGalleryImageFile:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityGalleryNavOrder"
        })
    intCommunityGalleryNavOrder:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityGalleryDefault"
        })
    bCommunityGalleryDefault:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityGalleryCreatedDate"
        })
    dteCommunityGalleryCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityGalleryModifiedDate"
        })
    dteCommunityGalleryModifiedDate:Date | null;
        
}
