import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunityProject} from "./tblCommunityProject";
import {tblContractPlanContractPlanProjectXRef} from "./tblContractPlanContractPlanProjectXRef";
import {tblContractPlanProjectHEOption} from "./tblContractPlanProjectHEOption";


@Entity("tblContractPlanProject",{schema:"public" } )
@Index("idx_17322_IX_tblContractPlanProject",["dteContractPlanProjectCreatedDate","dteContractPlanProjectModifiedDate","intContractPlanProjectCommunityProject","varContractPlanProjectPlanCode","varContractPlanProjectProjectCode",],{unique:true})
@Index("idx_17322_IX_tblContractPlanProject2",["intContractPlanProjectCommunityProject","varContractPlanProjectPlanCode","varContractPlanProjectProjectCode",],{unique:true})
export class tblContractPlanProject {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContractPlanProjectID"
        })
    intContractPlanProjectID:string;
        

   
    @ManyToOne(type=>tblCommunityProject, tblCommunityProject=>tblCommunityProject.tblContractPlanProjects,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContractPlanProjectCommunityProjectID'})
    intContractPlanProjectCommunityProject:tblCommunityProject | null;


    @Column("text",{ 
        nullable:false,
        name:"varContractPlanProjectPlanCode"
        })
    varContractPlanProjectPlanCode:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varContractPlanProjectProjectCode"
        })
    varContractPlanProjectProjectCode:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContractPlanProjectCreatedDate"
        })
    dteContractPlanProjectCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContractPlanProjectModifiedDate"
        })
    dteContractPlanProjectModifiedDate:Date;
        

   
    @OneToMany(type=>tblContractPlanContractPlanProjectXRef, tblContractPlanContractPlanProjectXRef=>tblContractPlanContractPlanProjectXRef.intContractPlanContractPlanProjectXRefContractPlanProject,{ onDelete: 'CASCADE' , })
    tblContractPlanContractPlanProjectXRefs:tblContractPlanContractPlanProjectXRef[];
    

   
    @OneToMany(type=>tblContractPlanProjectHEOption, tblContractPlanProjectHEOption=>tblContractPlanProjectHEOption.intContractPlanProjectHeOptionContractPlanProject,{ onDelete: 'CASCADE' , })
    tblContractPlanProjectHeOptions:tblContractPlanProjectHEOption[];
    
}
