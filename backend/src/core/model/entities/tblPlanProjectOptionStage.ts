import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblPlanProjectOptionStage",{schema:"public" } )
export class tblPlanProjectOptionStage {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intPlanProjectOptionStageID"
        })
    intPlanProjectOptionStageID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varPlanCode"
        })
    varPlanCode:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varProjectCode"
        })
    varProjectCode:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varOptionCode"
        })
    varOptionCode:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curOptionUnitPrice"
        })
    curOptionUnitPrice:string;
        
}
