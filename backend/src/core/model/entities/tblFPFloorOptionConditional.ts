import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPFloorOption} from "./tblFPFloorOption";


@Entity("tblFPFloorOptionConditional",{schema:"public" } )
export class tblFPFloorOptionConditional {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPFloorOptionConditionalID"
        })
    intFPFloorOptionConditionalID:string;
        

   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpFloorOptionConditionals,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intFPFloorOptionConditionalFPFloorOptionID'})
    intFpFloorOptionConditionalFpFloorOption:tblFPFloorOption | null;


    @Column("text",{ 
        nullable:true,
        name:"varFPFloorOptionConditionalImage"
        })
    varFPFloorOptionConditionalImage:string | null;
        
}
