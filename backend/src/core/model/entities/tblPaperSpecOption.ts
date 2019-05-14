import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblPaperSpec} from "./tblPaperSpec";
import {tblHEOptionGroup} from "./tblHEOptionGroup";
import {tblHEOption} from "./tblHEOption";


@Entity("tblPaperSpecOption",{schema:"public" } )
export class tblPaperSpecOption {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intPaperSpecOptionID"
        })
    intPaperSpecOptionID:string;
        

   
    @ManyToOne(type=>tblPaperSpec, tblPaperSpec=>tblPaperSpec.tblPaperSpecOptions,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intPaperSpecOptionPaperSpecID'})
    intPaperSpecOptionPaperSpec:tblPaperSpec | null;


   
    @ManyToOne(type=>tblHEOptionGroup, tblHEOptionGroup=>tblHEOptionGroup.tblPaperSpecOptions,{  })
    @JoinColumn({ name:'intPaperSpecOptionHEOptionGroupID'})
    intPaperSpecOptionHeOptionGroup:tblHEOptionGroup | null;


   
    @ManyToOne(type=>tblHEOption, tblHEOption=>tblHEOption.tblPaperSpecOptions,{  })
    @JoinColumn({ name:'intPaperSpecOptionHEOptionID'})
    intPaperSpecOptionHeOption:tblHEOption | null;


    @Column("text",{ 
        nullable:false,
        default: () => "'S'",
        name:"chrPaperSpecOptionType"
        })
    chrPaperSpecOptionType:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varPaperSpecOptionCode"
        })
    varPaperSpecOptionCode:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPaperSpecOptionDesc"
        })
    varPaperSpecOptionDesc:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curPaperSpecOptionUnitPrice"
        })
    curPaperSpecOptionUnitPrice:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intPaperSpecOptionQty"
        })
    intPaperSpecOptionQty:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'Finance'",
        name:"varPaperSpecOptionPayType"
        })
    varPaperSpecOptionPayType:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dtePaperSpecOptionCreatedDate"
        })
    dtePaperSpecOptionCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dtePaperSpecOptionModifiedDate"
        })
    dtePaperSpecOptionModifiedDate:Date;
        
}
