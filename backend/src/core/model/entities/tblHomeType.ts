import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblHomeType",{schema:"public" } )
export class tblHomeType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomeTypeID"
        })
    intHomeTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"txtHomeType"
        })
    txtHomeType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtHomeTypeCommunityList"
        })
    txtHomeTypeCommunityList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varHomeTypeText"
        })
    varHomeTypeText:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varHomeTypeStyle"
        })
    varHomeTypeStyle:string | null;
        
}
