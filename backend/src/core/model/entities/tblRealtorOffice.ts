import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRealtorOffice",{schema:"public" } )
@Index("idx_19443_IX_tblRealtorOffice_zip",["intRealtorOfficeID","varRealtorOffice","varRealtorOfficeZip",])
export class tblRealtorOffice {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRealtorOfficeID"
        })
    intRealtorOfficeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOffice"
        })
    varRealtorOffice:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeAddress"
        })
    varRealtorOfficeAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeAddress2"
        })
    varRealtorOfficeAddress2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeCity"
        })
    varRealtorOfficeCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeState"
        })
    varRealtorOfficeState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeZip"
        })
    varRealtorOfficeZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficePhone"
        })
    varRealtorOfficePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeFax"
        })
    varRealtorOfficeFax:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeOther"
        })
    varRealtorOfficeOther:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRealtorOfficeCreatedDate"
        })
    dteRealtorOfficeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRealtorOfficeModifiedDate"
        })
    dteRealtorOfficeModifiedDate:Date;
        
}
