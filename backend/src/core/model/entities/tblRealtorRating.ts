import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRealtorRating",{schema:"public" } )
export class tblRealtorRating {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRealtorRatingID"
        })
    intRealtorRatingID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"chrRealtorRating"
        })
    chrRealtorRating:string | null;
        
}
