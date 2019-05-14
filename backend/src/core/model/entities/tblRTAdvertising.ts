import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTAdvertising",{schema:"public" } )
export class tblRTAdvertising {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTAdvertisingID"
        })
    intRTAdvertisingID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingVehicle"
        })
    varRTAdvertisingVehicle:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTAdvertisingTypeID"
        })
    intRTAdvertisingTypeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingDescription"
        })
    varRTAdvertisingDescription:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curRTAdvertisingCost"
        })
    curRTAdvertisingCost:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "true",
        name:"bRTAdvertisingLive"
        })
    bRTAdvertisingLive:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingURL"
        })
    varRTAdvertisingURL:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTAdvertisingCostTermID"
        })
    intRTAdvertisingCostTermID:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curRTAdvertisingCostGross"
        })
    curRTAdvertisingCostGross:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingMediaKit"
        })
    varRTAdvertisingMediaKit:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingOutreachType"
        })
    varRTAdvertisingOutreachType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingZeroCostOption"
        })
    varRTAdvertisingZeroCostOption:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTAdvertisingMediaContactID"
        })
    intRTAdvertisingMediaContactID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingComments"
        })
    varRTAdvertisingComments:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingSize"
        })
    varRTAdvertisingSize:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingColor"
        })
    varRTAdvertisingColor:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingSectionZone"
        })
    varRTAdvertisingSectionZone:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRTAdvertisingBleed"
        })
    bRTAdvertisingBleed:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTAdvertisingCompanyID"
        })
    intRTAdvertisingCompanyID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTAdvertisingCreatedDate"
        })
    dteRTAdvertisingCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTAdvertisingModifiedDate"
        })
    dteRTAdvertisingModifiedDate:Date | null;
        
}
