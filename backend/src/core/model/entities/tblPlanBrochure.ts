import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";


@Entity("tblPlanBrochure",{schema:"public" } )
export class tblPlanBrochure {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intPlanBrochureID"
        })
    intPlanBrochureID:string;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblPlanBrochures,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intPlanBrochureModelID'})
    intPlanBrochureModel:tblCommunity | null;


    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bitPlanBrochureIncludeWithHomeBrochure"
        })
    bitPlanBrochureIncludeWithHomeBrochure:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intPlanBrochureNavOrder"
        })
    intPlanBrochureNavOrder:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPlanBrochureTitle"
        })
    varPlanBrochureTitle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPlanBrochureType"
        })
    varPlanBrochureType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPlanBrochureURLPDF"
        })
    varPlanBrochureURLPDF:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dtePlanBrochureCreatedDate"
        })
    dtePlanBrochureCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dtePlanBrochureModifiedDate"
        })
    dtePlanBrochureModifiedDate:Date;
        
}
