import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFTeamMember} from "./tblMBFTeamMember";


@Entity("tblMBFTeamMemberCommunityProject",{schema:"public" } )
@Index("idx_18716_IX_tblMBFTeamMemberCommunityProject",["intMBFTeamMemberCommunityProjectProjectID","intMbfTeamMemberCommunityProjectTeamMember",],{unique:true})
export class tblMBFTeamMemberCommunityProject {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFTeamMemberCommunityProjectID"
        })
    intMBFTeamMemberCommunityProjectID:string;
        

   
    @ManyToOne(type=>tblMBFTeamMember, tblMBFTeamMember=>tblMBFTeamMember.tblMbfTeamMemberCommunityProjects,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFTeamMemberCommunityProjectTeamMemberID'})
    intMbfTeamMemberCommunityProjectTeamMember:tblMBFTeamMember | null;


    @Column("integer",{ 
        nullable:false,
        name:"intMBFTeamMemberCommunityProjectProjectID"
        })
    intMBFTeamMemberCommunityProjectProjectID:number;
        
}
