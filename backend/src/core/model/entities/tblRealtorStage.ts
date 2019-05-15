import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRealtorStage",{schema:"public" } )
export class tblRealtorStage {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRealtorStageID"
        })
    intRealtorStageID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRealtorSSOfficeID"
        })
    intRealtorSSOfficeID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorFirstName"
        })
    varRealtorFirstName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorLastName"
        })
    varRealtorLastName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorEmail"
        })
    varRealtorEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorCellPhone"
        })
    varRealtorCellPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeExtPhone"
        })
    varRealtorOfficeExtPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorComms"
        })
    varRealtorComms:string | null;
        
}
