import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPCommunityModelElevation} from "./tblFPCommunityModelElevation";
import {tblFPFloorOption} from "./tblFPFloorOption";


@Entity("tblFPCommunityModelElevationOptionDisplayAsStandard",{schema:"public" } )
@Index("idx_17648_IX_tblFPCommunityModelElevationOptionDisplayAsStandar",["bFPCommunityModelElevationOptionDisplayAsStandardDeletedFlg","dteFPCommunityModelElevationOptionDisplayAsStandardCreatedDate","dteFPCommunityModelElevationOptionDisplayAsStandardModifiedDate","intFpCommunityModelElevationOptionDisplayAsStandardFpCommunityM","intFpCommunityModelElevationOptionDisplayAsStandardFpFloorOptio","intFPCommunityModelElevationOptionDisplayAsStandardID","varFPCommunityModelElevationOptionDisplayAsStandardStatus",])
export class tblFPCommunityModelElevationOptionDisplayAsStandard {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPCommunityModelElevationOptionDisplayAsStandardID"
        })
    intFPCommunityModelElevationOptionDisplayAsStandardID:string;
        

   
    @ManyToOne(type=>tblFPCommunityModelElevation, tblFPCommunityModelElevation=>tblFPCommunityModelElevation.tblFpCommunityModelElevationOptionDisplayAsStandards,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intFPCommunityModelElevationOptionDisplayAsStandardFPCommunityM'})
    intFpCommunityModelElevationOptionDisplayAsStandardFpCommunityM:tblFPCommunityModelElevation | null;


   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpCommunityModelElevationOptionDisplayAsStandards,{  nullable:false, })
    @JoinColumn({ name:'intFPCommunityModelElevationOptionDisplayAsStandardFPFloorOptio'})
    intFpCommunityModelElevationOptionDisplayAsStandardFpFloorOptio:tblFPFloorOption | null;


    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFPCommunityModelElevationOptionDisplayAsStandardStatus"
        })
    varFPCommunityModelElevationOptionDisplayAsStandardStatus:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPCommunityModelElevationOptionDisplayAsStandardDeletedFlg"
        })
    bFPCommunityModelElevationOptionDisplayAsStandardDeletedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPCommunityModelElevationOptionDisplayAsStandardCreatedDate"
        })
    dteFPCommunityModelElevationOptionDisplayAsStandardCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPCommunityModelElevationOptionDisplayAsStandardModifiedDate"
        })
    dteFPCommunityModelElevationOptionDisplayAsStandardModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPCommunityModelElevationOptionDisplayAsStandardCreatedBy"
        })
    intFPCommunityModelElevationOptionDisplayAsStandardCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPCommunityModelElevationOptionDisplayAsStandardModifiedBy"
        })
    intFPCommunityModelElevationOptionDisplayAsStandardModifiedBy:number | null;
        
}
