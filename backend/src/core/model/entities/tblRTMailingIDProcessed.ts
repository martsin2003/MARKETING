import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTMailingIDProcessed",{schema:"public" } )
export class tblRTMailingIDProcessed {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"intRTMailingIDProcessed_ID"
        })
    intRTMailingIDProcessed_ID:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"intRTMailingIDProcessedID"
        })
    intRTMailingIDProcessedID:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"intRTMailingIDProcessedCampaignAPIID"
        })
    intRTMailingIDProcessedCampaignAPIID:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTMailingIDProcessFunction"
        })
    varRTMailingIDProcessFunction:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTMailingIDProcessedCreated"
        })
    dteRTMailingIDProcessedCreated:Date | null;
        
}
