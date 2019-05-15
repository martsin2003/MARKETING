import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTMediaSource} from "./tblRTMediaSource";


@Entity("tblRTAdvertisingType",{schema:"public" } )
export class tblRTAdvertisingType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTAdvertisingTypeID"
        })
    intRTAdvertisingTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingType"
        })
    varRTAdvertisingType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingTypeSymbol"
        })
    varRTAdvertisingTypeSymbol:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTArchive"
        })
    bRTArchive:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingTypeMediaCategory"
        })
    varRTAdvertisingTypeMediaCategory:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTAdvertisingTypeIsMediaCategoryFlg"
        })
    bRTAdvertisingTypeIsMediaCategoryFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTAdvertisingTypeMediaCategoryURLReqdFlg"
        })
    bRTAdvertisingTypeMediaCategoryURLReqdFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTAdvertisingTypeCreatedDate"
        })
    dteRTAdvertisingTypeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTAdvertisingTypeModifiedDate"
        })
    dteRTAdvertisingTypeModifiedDate:Date;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varRTAdvertisingTypeStatus"
        })
    varRTAdvertisingTypeStatus:string;
        

   
    @OneToMany(type=>tblRTMediaSource, tblRTMediaSource=>tblRTMediaSource.intRtMediaSourceAdvertisingType,{ onDelete: 'CASCADE' , })
    tblRtMediaSources:tblRTMediaSource[];
    
}
