import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPModelGenericElevationGroupGallery} from "./tblFPModelGenericElevationGroupGallery";
import {tblFPModelGenericElevationOptionGallery} from "./tblFPModelGenericElevationOptionGallery";


@Entity("tblFPModelGenericElevation",{schema:"public" } )
export class tblFPModelGenericElevation {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPModelGenericElevationID"
        })
    intFPModelGenericElevationID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericElevationFPID"
        })
    intFPModelGenericElevationFPID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericElevationModelGenericElevationID"
        })
    intFPModelGenericElevationModelGenericElevationID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericElevationCreatedDate"
        })
    dteFPModelGenericElevationCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericElevationModifiedDate"
        })
    dteFPModelGenericElevationModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericElevationCreatedBy"
        })
    intFPModelGenericElevationCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericElevationModifiedBy"
        })
    intFPModelGenericElevationModifiedBy:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPModelGenericElevationDeletedFlg"
        })
    bFPModelGenericElevationDeletedFlg:boolean;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFPModelGenericElevationStatus"
        })
    varFPModelGenericElevationStatus:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericElevationFPElevationID"
        })
    intFPModelGenericElevationFPElevationID:number;
        

   
    @OneToMany(type=>tblFPModelGenericElevationGroupGallery, tblFPModelGenericElevationGroupGallery=>tblFPModelGenericElevationGroupGallery.intFpModelGenericElevationGroupGalleryFpModelGenericElevation)
    tblFpModelGenericElevationGroupGallerys:tblFPModelGenericElevationGroupGallery[];
    

   
    @OneToMany(type=>tblFPModelGenericElevationOptionGallery, tblFPModelGenericElevationOptionGallery=>tblFPModelGenericElevationOptionGallery.intFpModelGenericElevationOptionGalleryFpModelGenericElevationI)
    tblFpModelGenericElevationOptionGallerys:tblFPModelGenericElevationOptionGallery[];
    
}
