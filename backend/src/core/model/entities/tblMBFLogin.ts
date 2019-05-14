import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFBuyer} from "./tblMBFBuyer";


@Entity("tblMBFLogin",{schema:"public" } )
export class tblMBFLogin {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFLoginID"
        })
    intMBFLoginID:string;
        

   
    @ManyToOne(type=>tblMBFBuyer, tblMBFBuyer=>tblMBFBuyer.tblMbfLogins,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFLoginBuyerID'})
    intMbfLoginBuyer:tblMBFBuyer | null;


    @Column("text",{ 
        nullable:true,
        name:"intMBFLoginToken"
        })
    intMBFLoginToken:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLoginCreatedDate"
        })
    dteMBFLoginCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLoginModifiedDate"
        })
    dteMBFLoginModifiedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFLoginExpirationDate"
        })
    dteMBFLoginExpirationDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFLoginIPAddress"
        })
    varMBFLoginIPAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFLoginJSessionID"
        })
    varMBFLoginJSessionID:string | null;
        
}
