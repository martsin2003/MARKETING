import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityAmenitiesGallery",{schema:"public" } )
export class tblCommunityAmenitiesGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityAmenitiesGalleryID"
        })
    intCommunityAmenitiesGalleryID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityAmenitiesGalleryCommunityID"
        })
    intCommunityAmenitiesGalleryCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAmenitiesGalleryCaption"
        })
    varCommunityAmenitiesGalleryCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAmenitiesGalleryImageFile"
        })
    varCommunityAmenitiesGalleryImageFile:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityAmenitiesGalleryNavOrder"
        })
    intCommunityAmenitiesGalleryNavOrder:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityAmenitiesGalleryDefault"
        })
    bCommunityAmenitiesGalleryDefault:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityAmenitiesGalleryCreatedDate"
        })
    dteCommunityAmenitiesGalleryCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityAmenitiesGalleryModifiedDate"
        })
    dteCommunityAmenitiesGalleryModifiedDate:Date | null;
        
}
