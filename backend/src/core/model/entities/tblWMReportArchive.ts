import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblWMReportArchive",{schema:"public" } )
@Index("idx_20893_IX_tblWMReportArchive",["bWMReportArchiveDistributedFlg","intWMReportArchiveBatchID","varWMReportArchiveFileType","varWMReportArchiveFilename",],{unique:true})
export class tblWMReportArchive {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intWMReportArchiveID"
        })
    intWMReportArchiveID:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"intWMReportArchiveBatchID"
        })
    intWMReportArchiveBatchID:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'full'",
        name:"varWMReportArchiveFileType"
        })
    varWMReportArchiveFileType:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varWMReportArchiveFilename"
        })
    varWMReportArchiveFilename:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bWMReportArchiveDistributedFlg"
        })
    bWMReportArchiveDistributedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMReportArchiveCreatedDate"
        })
    dteWMReportArchiveCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMReportArchiveModifiedDate"
        })
    dteWMReportArchiveModifiedDate:Date;
        
}
