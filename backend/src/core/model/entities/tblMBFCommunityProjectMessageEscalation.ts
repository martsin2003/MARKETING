import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunityProject} from "./tblCommunityProject";


@Entity("tblMBFCommunityProjectMessageEscalation",{schema:"public" } )
@Index("idx_18385_IX_tblMBFCommunityProjectMessageEscalation",["intMbfCommunityProjectMessageEscalationCommunityProject","intMBFCommunityProjectMessageEscalationMBFTeamMemberID","varMBFCommunityProjectMessageEscalationLevel",],{unique:true})
export class tblMBFCommunityProjectMessageEscalation {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFCommunityProjectMessageEscalationID"
        })
    intMBFCommunityProjectMessageEscalationID:string;
        

   
    @ManyToOne(type=>tblCommunityProject, tblCommunityProject=>tblCommunityProject.tblMbfCommunityProjectMessageEscalations,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFCommunityProjectMessageEscalationCommunityProjectID'})
    intMbfCommunityProjectMessageEscalationCommunityProject:tblCommunityProject | null;


    @Column("integer",{ 
        nullable:false,
        name:"intMBFCommunityProjectMessageEscalationMBFTeamMemberID"
        })
    intMBFCommunityProjectMessageEscalationMBFTeamMemberID:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'24 hr'",
        name:"varMBFCommunityProjectMessageEscalationLevel"
        })
    varMBFCommunityProjectMessageEscalationLevel:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFCommunityProjectMessageEscalationCreatedDate"
        })
    dteMBFCommunityProjectMessageEscalationCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFCommunityProjectMessageEscalationModifiedDate"
        })
    dteMBFCommunityProjectMessageEscalationModifiedDate:Date;
        
}
