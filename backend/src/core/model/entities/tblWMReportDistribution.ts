import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblWMReport} from "./tblWMReport";
import {tblWMDistributionRecipient} from "./tblWMDistributionRecipient";


@Entity("tblWMReportDistribution",{schema:"public" } )
@Index("idx_20902_IX_tblWMReportDistribution",["dteWMReportDistributionCreatedDate","intWmReportDistributionWmDistributionRecipient","intWmReportDistributionWmReport",],{unique:true})
export class tblWMReportDistribution {

   
    @ManyToOne(type=>tblWMReport, tblWMReport=>tblWMReport.tblWmReportDistributions,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intWMReportDistributionWMReportID'})
    intWmReportDistributionWmReport:tblWMReport | null;


   
    @ManyToOne(type=>tblWMDistributionRecipient, tblWMDistributionRecipient=>tblWMDistributionRecipient.tblWmReportDistributions,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intWMReportDistributionWMDistributionRecipientID'})
    intWmReportDistributionWmDistributionRecipient:tblWMDistributionRecipient | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMReportDistributionCreatedDate"
        })
    dteWMReportDistributionCreatedDate:Date;
        
}
