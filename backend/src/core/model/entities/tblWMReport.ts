import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblWMDistribution} from "./tblWMDistribution";
import {tblWMReportDistribution} from "./tblWMReportDistribution";


@Entity("tblWMReport",{schema:"public" } )
@Index("idx_20882_IX_tblWMReport",["bWMReportDisplayFlg","bWMReportDistributeFlg","varWMReportDescription","varWMReportName",],{unique:true})
export class tblWMReport {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intWMReportID"
        })
    intWMReportID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varWMReportName"
        })
    varWMReportName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMReportDescription"
        })
    varWMReportDescription:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bWMReportDisplayFlg"
        })
    bWMReportDisplayFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bWMReportDistributeFlg"
        })
    bWMReportDistributeFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMReportCreatedDate"
        })
    dteWMReportCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMReportModifiedDate"
        })
    dteWMReportModifiedDate:Date;
        

    @Column("text",{ 
        nullable:false,
        name:"varWMReportCode"
        })
    varWMReportCode:string;
        

   
    @OneToMany(type=>tblWMDistribution, tblWMDistribution=>tblWMDistribution.intWmDistributionWmReport,{ onDelete: 'CASCADE' , })
    tblWmDistributions:tblWMDistribution[];
    

   
    @OneToMany(type=>tblWMReportDistribution, tblWMReportDistribution=>tblWMReportDistribution.intWmReportDistributionWmReport,{ onDelete: 'CASCADE' , })
    tblWmReportDistributions:tblWMReportDistribution[];
    
}
