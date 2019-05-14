import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunityFlag} from "./tblCommunityFlag";


@Entity("tblFlags",{schema:"public" } )
export class tblFlags {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFlagID"
        })
    intFlagID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varFlagURL"
        })
    varFlagURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFlagColor"
        })
    varFlagColor:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFlagHeaderText"
        })
    varFlagHeaderText:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFlagHeaderText2"
        })
    varFlagHeaderText2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFlagIcon"
        })
    varFlagIcon:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFlagSmallText"
        })
    varFlagSmallText:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varFlagDescription"
        })
    varFlagDescription:string | null;
        

   
    @OneToMany(type=>tblCommunityFlag, tblCommunityFlag=>tblCommunityFlag.intCommunityFlagFlag,{ onDelete: 'SET NULL' , })
    tblCommunityFlags:tblCommunityFlag[];
    
}
