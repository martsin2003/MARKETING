import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyCashOutlay",{schema:"public" } )
export class tblQualifyCashOutlay {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyCashOutlayID"
        })
    intQualifyCashOutlayID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyCashOutlayValue"
        })
    varQualifyCashOutlayValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyCashOutlayDisplay"
        })
    varQualifyCashOutlayDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyCashOutlaySort"
        })
    intQualifyCashOutlaySort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyCashOutlayScore"
        })
    intQualifyCashOutlayScore:number | null;
        
}
