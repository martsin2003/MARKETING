import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTMediaType",{schema:"public" } )
export class tblRTMediaType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTMediaTypeID"
        })
    intRTMediaTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTMediaType"
        })
    varRTMediaType:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTArchive"
        })
    bRTArchive:boolean;
        
}
