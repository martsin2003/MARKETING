import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";


@Entity("tblBDXHotHome",{schema:"public" } )
export class tblBDXHotHome {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intBDXHotHomeID"
        })
    intBDXHotHomeID:string;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblBdxHotHomes,{ onDelete: 'SET NULL', })
    @JoinColumn({ name:'intBDXHotHomeCommunityID'})
    intBdxHotHomeCommunity:tblCommunity | null;


    @Column("integer",{ 
        nullable:false,
        name:"intBDXHotHomeRefID"
        })
    intBDXHotHomeRefID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"varBDXHotHomeTitle"
        })
    varBDXHotHomeTitle:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varBDXHotHomeDesc"
        })
    varBDXHotHomeDesc:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bBDXHotHomeIsMoveInNow"
        })
    bBDXHotHomeIsMoveInNow:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteBDXHotHomeCreatedDate"
        })
    dteBDXHotHomeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteBDXHotHomeModifiedDate"
        })
    dteBDXHotHomeModifiedDate:Date;
        
}
