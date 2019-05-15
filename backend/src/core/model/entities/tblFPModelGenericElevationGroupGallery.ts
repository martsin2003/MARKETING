import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPFloorGroup} from "./tblFPFloorGroup";
import {tblFPModelGenericElevation} from "./tblFPModelGenericElevation";


@Entity("tblFPModelGenericElevationGroupGallery",{schema:"public" } )
export class tblFPModelGenericElevationGroupGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPModelGenericElevationGroupGalleryID"
        })
    intFPModelGenericElevationGroupGalleryID:string;
        

   
    @ManyToOne(type=>tblFPFloorGroup, tblFPFloorGroup=>tblFPFloorGroup.tblFpModelGenericElevationGroupGallerys,{  nullable:false, })
    @JoinColumn({ name:'intFPModelGenericElevationGroupGalleryFPFloorGroupID'})
    intFpModelGenericElevationGroupGalleryFpFloorGroup:tblFPFloorGroup | null;


   
    @ManyToOne(type=>tblFPModelGenericElevation, tblFPModelGenericElevation=>tblFPModelGenericElevation.tblFpModelGenericElevationGroupGallerys,{  nullable:false, })
    @JoinColumn({ name:'intFPModelGenericElevationGroupGalleryFPModelGenericElevationID'})
    intFpModelGenericElevationGroupGalleryFpModelGenericElevation:tblFPModelGenericElevation | null;


    @Column("text",{ 
        nullable:true,
        name:"varFPModelGenericElevationGroupGalleryImageFile"
        })
    varFPModelGenericElevationGroupGalleryImageFile:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFPModelGenericElevationGroupGalleryCaption"
        })
    varFPModelGenericElevationGroupGalleryCaption:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericElevationGroupGalleryNavOrder"
        })
    intFPModelGenericElevationGroupGalleryNavOrder:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPModelGenericElevationGroupGalleryDefault"
        })
    bFPModelGenericElevationGroupGalleryDefault:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPModelGenericElevationGroupGalleryDeletedFlg"
        })
    bFPModelGenericElevationGroupGalleryDeletedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericElevationGroupGalleryCreatedDate"
        })
    dteFPModelGenericElevationGroupGalleryCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericElevationGroupGalleryModifiedDate"
        })
    dteFPModelGenericElevationGroupGalleryModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericElevationGroupGalleryCreatedBy"
        })
    intFPModelGenericElevationGroupGalleryCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericElevationGroupGalleryModifiedBy"
        })
    intFPModelGenericElevationGroupGalleryModifiedBy:number | null;
        
}
