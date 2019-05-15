import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFMessage} from "./tblMBFMessage";


@Entity("tblMBFMessageResolution",{schema:"public" } )
@Index("idx_18583_IX_tblMBFMessageResolution",["bMBFMessageResolutionResolvedByClientFlg","intMbfMessageResolutionMbfMessage","intMBFMessageResolutionMBFTeamMemberID","varMBFMessageResolutionResolvedBy",],{unique:true})
@Index("idx_18583_IX_tblMBFMessageResolution2",["bMBFMessageResolutionResolvedByClientFlg","dteMBFMessageResolutionCreatedDate","intMbfMessageResolutionMbfMessage","intMBFMessageResolutionMBFTeamMemberID","varMBFMessageResolutionResolvedBy",])
export class tblMBFMessageResolution {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFMessageResolutionID"
        })
    intMBFMessageResolutionID:string;
        

   
    @ManyToOne(type=>tblMBFMessage, tblMBFMessage=>tblMBFMessage.tblMbfMessageResolutions,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFMessageResolutionMBFMessageID'})
    intMbfMessageResolutionMbfMessage:tblMBFMessage | null;


    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFMessageResolutionResolvedByClientFlg"
        })
    bMBFMessageResolutionResolvedByClientFlg:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"intMBFMessageResolutionMBFTeamMemberID"
        })
    intMBFMessageResolutionMBFTeamMemberID:number | null;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFMessageResolutionResolvedBy"
        })
    varMBFMessageResolutionResolvedBy:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFMessageResolutionCreatedDate"
        })
    dteMBFMessageResolutionCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFMessageResolutionModifiedDate"
        })
    dteMBFMessageResolutionModifiedDate:Date;
        
}
