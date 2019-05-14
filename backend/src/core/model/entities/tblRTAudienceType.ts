import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTAudienceType",{schema:"public" } )
export class tblRTAudienceType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTAudienceTypeID"
        })
    intRTAudienceTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAudienceType"
        })
    varRTAudienceType:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTArchive"
        })
    bRTArchive:boolean;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTAudienceTypeAbbr"
        })
    varRTAudienceTypeAbbr:string;
        
}
