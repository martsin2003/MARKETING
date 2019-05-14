import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityHomeTouchGallery",{schema:"public" } )
export class tblCommunityHomeTouchGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityHomeTouchGalleryID"
        })
    intCommunityHomeTouchGalleryID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityHomeTouchGalleryCommunityID"
        })
    intCommunityHomeTouchGalleryCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityHomeTouchGalleryCaption"
        })
    varCommunityHomeTouchGalleryCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityHomeTouchGalleryImageFile"
        })
    varCommunityHomeTouchGalleryImageFile:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityHomeTouchGalleryNavOrder"
        })
    intCommunityHomeTouchGalleryNavOrder:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityHomeTouchGalleryDefault"
        })
    bCommunityHomeTouchGalleryDefault:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityHomeTouchGalleryCreatedDate"
        })
    dteCommunityHomeTouchGalleryCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityHomeTouchGalleryModifiedDate"
        })
    dteCommunityHomeTouchGalleryModifiedDate:Date | null;
        
}
