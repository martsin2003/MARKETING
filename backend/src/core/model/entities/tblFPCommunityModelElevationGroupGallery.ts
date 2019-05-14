import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPFloorGroup} from "./tblFPFloorGroup";
import {tblFPCommunityModelElevation} from "./tblFPCommunityModelElevation";


@Entity("tblFPCommunityModelElevationGroupGallery",{schema:"public" } )
export class tblFPCommunityModelElevationGroupGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPCommunityModelElevationGroupGalleryID"
        })
    intFPCommunityModelElevationGroupGalleryID:string;
        

   
    @ManyToOne(type=>tblFPFloorGroup, tblFPFloorGroup=>tblFPFloorGroup.tblFpCommunityModelElevationGroupGallerys,{  nullable:false, })
    @JoinColumn({ name:'intFPCommunityModelElevationGroupGalleryFPFloorGroupID'})
    intFpCommunityModelElevationGroupGalleryFpFloorGroup:tblFPFloorGroup | null;


   
    @ManyToOne(type=>tblFPCommunityModelElevation, tblFPCommunityModelElevation=>tblFPCommunityModelElevation.tblFpCommunityModelElevationGroupGallerys,{  nullable:false, })
    @JoinColumn({ name:'intFPCommunityModelElevationGroupGalleryFPCommunityModelElevati'})
    intFpCommunityModelElevationGroupGalleryFpCommunityModelElevati:tblFPCommunityModelElevation | null;


    @Column("text",{ 
        nullable:true,
        name:"varFPCommunityModelElevationGroupGalleryImageFile"
        })
    varFPCommunityModelElevationGroupGalleryImageFile:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFPCommunityModelElevationGroupGalleryCaption"
        })
    varFPCommunityModelElevationGroupGalleryCaption:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPCommunityModelElevationGroupGalleryNavOrder"
        })
    intFPCommunityModelElevationGroupGalleryNavOrder:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPCommunityModelElevationGroupGalleryDefault"
        })
    bFPCommunityModelElevationGroupGalleryDefault:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPCommunityModelElevationGroupGalleryDeletedFlg"
        })
    bFPCommunityModelElevationGroupGalleryDeletedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPCommunityModelElevationGroupGalleryCreatedDate"
        })
    dteFPCommunityModelElevationGroupGalleryCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPCommunityModelElevationGroupGalleryModifiedDate"
        })
    dteFPCommunityModelElevationGroupGalleryModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPCommunityModelElevationGroupGalleryCreatedBy"
        })
    intFPCommunityModelElevationGroupGalleryCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPCommunityModelElevationGroupGalleryModifiedBy"
        })
    intFPCommunityModelElevationGroupGalleryModifiedBy:number | null;
        
}
