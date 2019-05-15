import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFMessage} from "./tblMBFMessage";
import {tblMBFMessageThreadAttachment} from "./tblMBFMessageThreadAttachment";


@Entity("tblMBFMessageThread",{schema:"public" } )
@Index("idx_18593_IX_tblMBFMessageThread",["bMBFMessageThreadClientFlg","dteMBFMessageThreadCreatedDate","intMBFMessageThreadEmailMessageID","intMbfMessageThreadMbfMessage","intMBFMessageThreadMBFTeamMemberID","varMBFMessageThreadNonce","varMBFMessageThreadSubmitterName",],{unique:true})
export class tblMBFMessageThread {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFMessageThreadID"
        })
    intMBFMessageThreadID:string;
        

   
    @ManyToOne(type=>tblMBFMessage, tblMBFMessage=>tblMBFMessage.tblMbfMessageThreads,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFMessageThreadMBFMessageID'})
    intMbfMessageThreadMbfMessage:tblMBFMessage | null;


    @Column("text",{ 
        nullable:false,
        name:"varMBFMessageThreadBody"
        })
    varMBFMessageThreadBody:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFMessageThreadClientFlg"
        })
    bMBFMessageThreadClientFlg:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"intMBFMessageThreadMBFTeamMemberID"
        })
    intMBFMessageThreadMBFTeamMemberID:number | null;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFMessageThreadSubmitterName"
        })
    varMBFMessageThreadSubmitterName:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFMessageThreadCreatedDate"
        })
    dteMBFMessageThreadCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFMessageThreadModifiedDate"
        })
    dteMBFMessageThreadModifiedDate:Date;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFMessageThreadNonce"
        })
    varMBFMessageThreadNonce:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"intMBFMessageThreadEmailMessageID"
        })
    intMBFMessageThreadEmailMessageID:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFMessageThreadIsInitialFlg"
        })
    bMBFMessageThreadIsInitialFlg:boolean;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'A'",
        name:"varMBFMessageThreadSource"
        })
    varMBFMessageThreadSource:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFMessageThreadViewedFlg"
        })
    bMBFMessageThreadViewedFlg:boolean;
        

   
    @OneToMany(type=>tblMBFMessageThreadAttachment, tblMBFMessageThreadAttachment=>tblMBFMessageThreadAttachment.intMbfMessageThreadAttachmentMbfMessageThread,{ onDelete: 'CASCADE' , })
    tblMbfMessageThreadAttachments:tblMBFMessageThreadAttachment[];
    
}
