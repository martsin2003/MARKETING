import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTDisplayMetric} from "./tblRTDisplayMetric";


@Entity("tblRTDisplayData",{schema:"public" } )
export class tblRTDisplayData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTDisplayDataID"
        })
    intRTDisplayDataID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayDataRTCampaignResponseID"
        })
    intRTDisplayDataRTCampaignResponseID:number;
        

   
    @ManyToOne(type=>tblRTDisplayMetric, tblRTDisplayMetric=>tblRTDisplayMetric.tblRtDisplayDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayDataMetricID'})
    intRtDisplayDataMetric:tblRTDisplayMetric | null;


    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
        name:"intRTDisplayDataValue"
        })
    intRTDisplayDataValue:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayDataCreatedDate"
        })
    dteRTDisplayDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayDataModifiedDate"
        })
    dteRTDisplayDataModifiedDate:Date;
        
}
