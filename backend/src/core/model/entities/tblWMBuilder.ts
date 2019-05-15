import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblWMLot} from "./tblWMLot";


@Entity("tblWMBuilder",{schema:"public" } )
@Index("idx_20776_IX_tblWMBuilder",["dteWMBuilderModifiedDate","intWMBuilderID","varWMBuilderName","varWMBuilderStatus",],{unique:true})
export class tblWMBuilder {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intWMBuilderID"
        })
    intWMBuilderID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varWMBuilderName"
        })
    varWMBuilderName:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varWMBuilderStatus"
        })
    varWMBuilderStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMBuilderCreatedDate"
        })
    dteWMBuilderCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMBuilderModifiedDate"
        })
    dteWMBuilderModifiedDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMBuilderColor"
        })
    varWMBuilderColor:string | null;
        

   
    @OneToMany(type=>tblWMLot, tblWMLot=>tblWMLot.intWmLotGiftedToWmBuilder)
    tblWmLots:tblWMLot[];
    

   
    @OneToMany(type=>tblWMLot, tblWMLot=>tblWMLot.intWmLotOwnedByWmBuilder)
    tblWmLots2:tblWMLot[];
    

   
    @OneToMany(type=>tblWMLot, tblWMLot=>tblWMLot.intWmLotSoldByWmBuilder)
    tblWmLots3:tblWMLot[];
    

   
    @OneToMany(type=>tblWMLot, tblWMLot=>tblWMLot.intWmLotSoldToWmBuilder)
    tblWmLots4:tblWMLot[];
    
}
