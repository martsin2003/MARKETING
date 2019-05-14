import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblContactAssigned",{schema:"public" } )
export class tblContactAssigned {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContactAssignedID"
        })
    intContactAssignedID:string;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContactAssigned"
        })
    dteContactAssigned:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContactAssignedCommunityID"
        })
    intContactAssignedCommunityID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intContactAssignedContactID"
        })
    intContactAssignedContactID:number | null;
        
}
