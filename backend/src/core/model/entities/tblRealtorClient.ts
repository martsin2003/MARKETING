import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRealtorClient",{schema:"public" } )
export class tblRealtorClient {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRealtorClientID"
        })
    intRealtorClientID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRealtorClientRealtorID"
        })
    intRealtorClientRealtorID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorClientFirstname"
        })
    varRealtorClientFirstname:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorClientLastname"
        })
    varRealtorClientLastname:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorClientAddress"
        })
    varRealtorClientAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorClientCity"
        })
    varRealtorClientCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorClientState"
        })
    varRealtorClientState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorClientZip"
        })
    varRealtorClientZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorClientEmail"
        })
    varRealtorClientEmail:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRealtorClientInserted"
        })
    dteRealtorClientInserted:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRealtorClientCommunityID"
        })
    intRealtorClientCommunityID:number | null;
        
}
