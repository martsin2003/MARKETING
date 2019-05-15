import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTPeriodType",{schema:"public" } )
export class tblRTPeriodType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTPeriodTypeID"
        })
    intRTPeriodTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTPeriodType"
        })
    varRTPeriodType:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTArchive"
        })
    bRTArchive:boolean;
        
}
