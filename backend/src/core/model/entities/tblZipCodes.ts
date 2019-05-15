import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblZipCodes",{schema:"public" } )
@Index("idx_20968_IX_tblZipCodes",["bUseInCRM","varZipCodes","varZipCodesCity","varZipCodesCounty","varZipCodesState",],{unique:true})
export class tblZipCodes {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intZipCodesID"
        })
    intZipCodesID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varZipCodes"
        })
    varZipCodes:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varZipCodesCity"
        })
    varZipCodesCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varZipCodesState"
        })
    varZipCodesState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varZipCodesCounty"
        })
    varZipCodesCounty:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bUseInCRM"
        })
    bUseInCRM:boolean;
        
}
