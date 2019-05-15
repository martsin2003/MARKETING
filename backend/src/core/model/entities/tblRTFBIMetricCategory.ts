import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTFBIMetricMetricCategory} from "./tblRTFBIMetricMetricCategory";


@Entity("tblRTFBIMetricCategory",{schema:"public" } )
@Index("idx_20056_IX_tblRTFBIMetricCategory",["bRTFBIMetricCategoryArchivedFlg","dteRTFBIMetricCategoryCreatedDate","dteRTFBIMetricCategoryModifiedDate","intRTFBIMetricCategoryID","varRTFBIMetricCategoryName",],{unique:true})
export class tblRTFBIMetricCategory {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTFBIMetricCategoryID"
        })
    intRTFBIMetricCategoryID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTFBIMetricCategoryName"
        })
    varRTFBIMetricCategoryName:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTFBIMetricCategoryArchivedFlg"
        })
    bRTFBIMetricCategoryArchivedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBIMetricCategoryCreatedDate"
        })
    dteRTFBIMetricCategoryCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBIMetricCategoryModifiedDate"
        })
    dteRTFBIMetricCategoryModifiedDate:Date;
        

   
    @OneToMany(type=>tblRTFBIMetricMetricCategory, tblRTFBIMetricMetricCategory=>tblRTFBIMetricMetricCategory.intRtfbiMetricMetricCategoryCategory,{ onDelete: 'CASCADE' , })
    tblRtfbiMetricMetricCategorys:tblRTFBIMetricMetricCategory[];
    
}
