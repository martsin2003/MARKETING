import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPElevation} from "./tblFPElevation";
import {tblFPFloorOption} from "./tblFPFloorOption";


@Entity("tblFPElevationOptionDisplayOnLoad",{schema:"public" } )
@Index("idx_17747_IX_tblFPElevationOptionDisplayOnLoad",["bFPElevationOptionDisplayOnLoadDeletedFlg","dteFPElevationOptionDisplayOnLoadModifiedDate","intFpElevationOptionDisplayOnLoadFpElevation","intFpElevationOptionDisplayOnLoadFpFloorOption","intFPElevationOptionDisplayOnLoadModifiedBy",])
export class tblFPElevationOptionDisplayOnLoad {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPElevationOptionDisplayOnLoadID"
        })
    intFPElevationOptionDisplayOnLoadID:string;
        

   
    @ManyToOne(type=>tblFPElevation, tblFPElevation=>tblFPElevation.tblFpElevationOptionDisplayOnLoads,{  nullable:false, })
    @JoinColumn({ name:'intFPElevationOptionDisplayOnLoadFPElevationID'})
    intFpElevationOptionDisplayOnLoadFpElevation:tblFPElevation | null;


   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpElevationOptionDisplayOnLoads,{  nullable:false, })
    @JoinColumn({ name:'intFPElevationOptionDisplayOnLoadFPFloorOptionID'})
    intFpElevationOptionDisplayOnLoadFpFloorOption:tblFPFloorOption | null;


    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPElevationOptionDisplayOnLoadDeletedFlg"
        })
    bFPElevationOptionDisplayOnLoadDeletedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPElevationOptionDisplayOnLoadCreatedDate"
        })
    dteFPElevationOptionDisplayOnLoadCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPElevationOptionDisplayOnLoadModifiedDate"
        })
    dteFPElevationOptionDisplayOnLoadModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPElevationOptionDisplayOnLoadCreatedBy"
        })
    intFPElevationOptionDisplayOnLoadCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPElevationOptionDisplayOnLoadModifiedBy"
        })
    intFPElevationOptionDisplayOnLoadModifiedBy:number | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFPElevationOptionDisplayOnLoadStatus"
        })
    varFPElevationOptionDisplayOnLoadStatus:string;
        
}
