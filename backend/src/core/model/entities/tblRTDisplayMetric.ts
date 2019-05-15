import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTDisplayAdData} from "./tblRTDisplayAdData";
import {tblRTDisplayData} from "./tblRTDisplayData";
import {tblRTDisplayKeywordData} from "./tblRTDisplayKeywordData";
import {tblRTDisplayLabeledAdData} from "./tblRTDisplayLabeledAdData";


@Entity("tblRTDisplayMetric",{schema:"public" } )
@Index("idx_19838_IX_tblRTDisplayMetric",["bRTDisplayMetricArchivedFlg","bRTDisplayMetricCollectFlg","intRTDisplayMetricDivisor","varRTDisplayMetricDataStoreType","varRTDisplayMetricName",],{unique:true})
export class tblRTDisplayMetric {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTDisplayMetricID"
        })
    intRTDisplayMetricID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTDisplayMetricName"
        })
    varRTDisplayMetricName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTDisplayMetricTitle"
        })
    varRTDisplayMetricTitle:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'single'",
        name:"varRTDisplayMetricDataStoreType"
        })
    varRTDisplayMetricDataStoreType:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTDisplayMetricDesc"
        })
    varRTDisplayMetricDesc:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTDisplayMetricArchivedFlg"
        })
    bRTDisplayMetricArchivedFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bRTDisplayMetricCollectFlg"
        })
    bRTDisplayMetricCollectFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayMetricCreatedDate"
        })
    dteRTDisplayMetricCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayMetricModifiedDate"
        })
    dteRTDisplayMetricModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayMetricDivisor"
        })
    intRTDisplayMetricDivisor:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTDisplayMetricMoneyFlg"
        })
    bRTDisplayMetricMoneyFlg:boolean;
        

   
    @OneToMany(type=>tblRTDisplayAdData, tblRTDisplayAdData=>tblRTDisplayAdData.intRtDisplayAdDataRtDisplayMetric,{ onDelete: 'CASCADE' , })
    tblRtDisplayAdDatas:tblRTDisplayAdData[];
    

   
    @OneToMany(type=>tblRTDisplayData, tblRTDisplayData=>tblRTDisplayData.intRtDisplayDataMetric,{ onDelete: 'CASCADE' , })
    tblRtDisplayDatas:tblRTDisplayData[];
    

   
    @OneToMany(type=>tblRTDisplayKeywordData, tblRTDisplayKeywordData=>tblRTDisplayKeywordData.intRtDisplayKeywordDataRtDisplayMetric,{ onDelete: 'CASCADE' , })
    tblRtDisplayKeywordDatas:tblRTDisplayKeywordData[];
    

   
    @OneToMany(type=>tblRTDisplayLabeledAdData, tblRTDisplayLabeledAdData=>tblRTDisplayLabeledAdData.intRtDisplayLabeledAdDataRtDisplayMetric,{ onDelete: 'CASCADE' , })
    tblRtDisplayLabeledAdDatas:tblRTDisplayLabeledAdData[];
    
}
