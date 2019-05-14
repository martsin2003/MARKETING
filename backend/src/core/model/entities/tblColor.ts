import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblColor",{schema:"public" } )
export class tblColor {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"intColorID"
        })
    intColorID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varColorSold"
        })
    varColorSold:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varColorAvailable"
        })
    varColorAvailable:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varColorHold"
        })
    varColorHold:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varColorFuture"
        })
    varColorFuture:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varColorModel"
        })
    varColorModel:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varColorRollover"
        })
    varColorRollover:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varColorCustomHome"
        })
    varColorCustomHome:string | null;
        
}
