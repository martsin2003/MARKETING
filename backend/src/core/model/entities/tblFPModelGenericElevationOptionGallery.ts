import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPFloorOption} from "./tblFPFloorOption";
import {tblFPModelGenericElevation} from "./tblFPModelGenericElevation";


@Entity("tblFPModelGenericElevationOptionGallery",{schema:"public" } )
export class tblFPModelGenericElevationOptionGallery {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPModelGenericElevationOptionGalleryID"
        })
    intFPModelGenericElevationOptionGalleryID:string;
        

   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpModelGenericElevationOptionGallerys,{  nullable:false, })
    @JoinColumn({ name:'intFPModelGenericElevationOptionGalleryFPFloorOptionID'})
    intFpModelGenericElevationOptionGalleryFpFloorOption:tblFPFloorOption | null;


   
    @ManyToOne(type=>tblFPModelGenericElevation, tblFPModelGenericElevation=>tblFPModelGenericElevation.tblFpModelGenericElevationOptionGallerys,{  nullable:false, })
    @JoinColumn({ name:'intFPModelGenericElevationOptionGalleryFPModelGenericElevationI'})
    intFpModelGenericElevationOptionGalleryFpModelGenericElevationI:tblFPModelGenericElevation | null;


    @Column("text",{ 
        nullable:true,
        name:"varFPModelGenericElevationOptionGalleryImageFile"
        })
    varFPModelGenericElevationOptionGalleryImageFile:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFPModelGenericElevationOptionGalleryCaption"
        })
    varFPModelGenericElevationOptionGalleryCaption:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericElevationOptionGalleryNavOrder"
        })
    intFPModelGenericElevationOptionGalleryNavOrder:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPModelGenericElevationOptionGalleryDefault"
        })
    bFPModelGenericElevationOptionGalleryDefault:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPModelGenericElevationOptionGalleryDeletedFlg"
        })
    bFPModelGenericElevationOptionGalleryDeletedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericElevationOptionGalleryCreatedDate"
        })
    dteFPModelGenericElevationOptionGalleryCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericElevationOptionGalleryModifiedDate"
        })
    dteFPModelGenericElevationOptionGalleryModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericElevationOptionGalleryCreatedBy"
        })
    intFPModelGenericElevationOptionGalleryCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericElevationOptionGalleryModifiedBy"
        })
    intFPModelGenericElevationOptionGalleryModifiedBy:number | null;
        
}
