import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblContractPlan} from "./tblContractPlan";
import {tblContractPlanProject} from "./tblContractPlanProject";
import {tblHomeEstimate} from "./tblHomeEstimate";
import {tblPaperSpec} from "./tblPaperSpec";


@Entity("tblContractPlanContractPlanProjectXRef",{schema:"public" } )
@Index("idx_17316_IX_tblContractPlanContractPlanProjectXRef",["dteContractPlanContractPlanProjectXRefCreatedDate","intContractPlanContractPlanProjectXRefContractPlan","intContractPlanContractPlanProjectXRefContractPlanProject","intContractPlanContractPlanProjectXRefCreatedBy",],{unique:true})
export class tblContractPlanContractPlanProjectXRef {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContractPlanContractPlanProjectXRefID"
        })
    intContractPlanContractPlanProjectXRefID:string;
        

   
    @ManyToOne(type=>tblContractPlan, tblContractPlan=>tblContractPlan.tblContractPlanContractPlanProjectXRefs,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContractPlanContractPlanProjectXRefContractPlanID'})
    intContractPlanContractPlanProjectXRefContractPlan:tblContractPlan | null;


   
    @ManyToOne(type=>tblContractPlanProject, tblContractPlanProject=>tblContractPlanProject.tblContractPlanContractPlanProjectXRefs,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContractPlanContractPlanProjectXRefContractPlanProjectID'})
    intContractPlanContractPlanProjectXRefContractPlanProject:tblContractPlanProject | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContractPlanContractPlanProjectXRefCreatedDate"
        })
    dteContractPlanContractPlanProjectXRefCreatedDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContractPlanContractPlanProjectXRefCreatedBy"
        })
    intContractPlanContractPlanProjectXRefCreatedBy:number;
        

   
    @OneToMany(type=>tblHomeEstimate, tblHomeEstimate=>tblHomeEstimate.intHomeEstimateContractPlanContractPlanProjectXRef)
    tblHomeEstimates:tblHomeEstimate[];
    

   
    @OneToMany(type=>tblPaperSpec, tblPaperSpec=>tblPaperSpec.intPaperSpecContractPlanContractPlanProjectXRef,{ onDelete: 'CASCADE' , })
    tblPaperSpecs:tblPaperSpec[];
    
}
