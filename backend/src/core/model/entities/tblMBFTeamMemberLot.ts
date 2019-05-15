import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFTeamMember} from "./tblMBFTeamMember";
import {tblMBFLot} from "./tblMBFLot";


@Entity("tblMBFTeamMemberLot",{schema:"public" } )
@Index("idx_18722_IX_tblMBFTeamMemberLot",["intMBFTeamMemberLotID","intMbfTeamMemberLotLot","intMbfTeamMemberLotTeamMember",],{unique:true})
export class tblMBFTeamMemberLot {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFTeamMemberLotID"
        })
    intMBFTeamMemberLotID:string;
        

   
    @ManyToOne(type=>tblMBFTeamMember, tblMBFTeamMember=>tblMBFTeamMember.tblMbfTeamMemberLots,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFTeamMemberLotTeamMemberID'})
    intMbfTeamMemberLotTeamMember:tblMBFTeamMember | null;


   
    @ManyToOne(type=>tblMBFLot, tblMBFLot=>tblMBFLot.tblMbfTeamMemberLots,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFTeamMemberLotLotID'})
    intMbfTeamMemberLotLot:tblMBFLot | null;

}
