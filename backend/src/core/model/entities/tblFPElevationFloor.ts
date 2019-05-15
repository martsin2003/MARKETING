import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblFPElevationFloor",{schema:"public" } )
export class tblFPElevationFloor {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPElevationFloorID"
        })
    intFPElevationFloorID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPElevationFloorFPElevationID"
        })
    intFPElevationFloorFPElevationID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPElevationFloorLevel"
        })
    intFPElevationFloorLevel:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varFPElevationFloorBasePNG"
        })
    varFPElevationFloorBasePNG:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFPElevationFloorStatus"
        })
    varFPElevationFloorStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPElevationFloorCreatedDate"
        })
    dteFPElevationFloorCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPElevationFloorModifiedDate"
        })
    dteFPElevationFloorModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPElevationFloorCreatedBy"
        })
    intFPElevationFloorCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPElevationFloorModifiedBy"
        })
    intFPElevationFloorModifiedBy:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPElevationFloorDeletedFlg"
        })
    bFPElevationFloorDeletedFlg:boolean;
        

    @Column("text",{ 
        nullable:false,
        name:"varFPElevationFloorLabel"
        })
    varFPElevationFloorLabel:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varFPElevationFloorPrintLabel"
        })
    varFPElevationFloorPrintLabel:string;
        
}
