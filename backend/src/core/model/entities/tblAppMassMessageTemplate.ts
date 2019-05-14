import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblAppMassMessage} from "./tblAppMassMessage";


@Entity("tblAppMassMessageTemplate",{schema:"public" } )
@Index("idx_16487_IX_tblAppMassMessageTemplate",["intAppMassMessageTemplateID","varAppMassMessageTemplateStatus","varAppMassMessageTemplateSubject",],{unique:true})
export class tblAppMassMessageTemplate {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAppMassMessageTemplateID"
        })
    intAppMassMessageTemplateID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varAppMassMessageTemplateSubject"
        })
    varAppMassMessageTemplateSubject:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varAppMassMessageTemplateMessage"
        })
    varAppMassMessageTemplateMessage:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varAppMassMessageTemplateStatus"
        })
    varAppMassMessageTemplateStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteAppMassMessageTemplateCreatedDate"
        })
    dteAppMassMessageTemplateCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteAppMassMessageTemplateModifiedDate"
        })
    dteAppMassMessageTemplateModifiedDate:Date;
        

   
    @OneToMany(type=>tblAppMassMessage, tblAppMassMessage=>tblAppMassMessage.intAppMassMessageTemplate,{ onDelete: 'SET NULL' , })
    tblAppMassMessages:tblAppMassMessage[];
    
}
