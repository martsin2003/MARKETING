import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";


@Entity("tblMoveInBrochure",{schema:"public" } )
export class tblMoveInBrochure {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMoveInBrochureID"
        })
    intMoveInBrochureID:string;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblMoveInBrochures,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMoveInBrochureModelID'})
    intMoveInBrochureModel:tblCommunity | null;


    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bitMoveInBrochureIncludeWithHomeBrochure"
        })
    bitMoveInBrochureIncludeWithHomeBrochure:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intMoveInBrochureNavOrder"
        })
    intMoveInBrochureNavOrder:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMoveInBrochureTitle"
        })
    varMoveInBrochureTitle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMoveInBrochureType"
        })
    varMoveInBrochureType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMoveInBrochureURLPDF"
        })
    varMoveInBrochureURLPDF:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMoveInBrochureCreatedDate"
        })
    dteMoveInBrochureCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMoveInBrochureModifiedDate"
        })
    dteMoveInBrochureModifiedDate:Date | null;
        
}
