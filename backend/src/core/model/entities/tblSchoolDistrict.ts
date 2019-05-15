import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblSchoolDistrict",{schema:"public" } )
@Index("idx_20498_IX_tblSchoolDistrict",["intSchoolDistrictID","varSchoolDistrictCity","varSchoolDistrictLEAID","varSchoolDistrictName","varSchoolDistrictState","varSchoolDistrictZip",],{unique:true})
export class tblSchoolDistrict {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intSchoolDistrictID"
        })
    intSchoolDistrictID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varSchoolDistrictLEAID"
        })
    varSchoolDistrictLEAID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varSchoolDistrictName"
        })
    varSchoolDistrictName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varSchoolDistrictPhone"
        })
    varSchoolDistrictPhone:string | null;
        

    @Column("text",{ 
        nullable:false,
        name:"varSchoolDistrictAddress"
        })
    varSchoolDistrictAddress:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varSchoolDistrictCity"
        })
    varSchoolDistrictCity:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varSchoolDistrictState"
        })
    varSchoolDistrictState:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varSchoolDistrictZip"
        })
    varSchoolDistrictZip:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteSchoolDistrictCreatedDate"
        })
    dteSchoolDistrictCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteSchoolDistrictModifiedDate"
        })
    dteSchoolDistrictModifiedDate:Date;
        
}
