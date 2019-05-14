import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblContactTask",{schema:"public" } )
export class tblContactTask {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContactTaskID"
        })
    intContactTaskID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContactTaskContactID"
        })
    intContactTaskContactID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContactTaskTaskID"
        })
    intContactTaskTaskID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContactTaskFinished"
        })
    dteContactTaskFinished:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContactTaskStatusID"
        })
    intContactTaskStatusID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContactTaskDue"
        })
    dteContactTaskDue:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContactTaskTaskType"
        })
    varContactTaskTaskType:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContactTaskContactTypeID"
        })
    intContactTaskContactTypeID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContactTaskCommunityID"
        })
    intContactTaskCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varContactTaskComments"
        })
    varContactTaskComments:string | null;
        
}
