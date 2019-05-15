import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPFloorOption} from "./tblFPFloorOption";


@Entity("tblFPFloorOptionRequireOne",{schema:"public" } )
@Index("idx_17878_IX_tblFPFloorOptionRequireOne",["intFPFloorOptionRequireOneFPFloorOptionID","intFpFloorOptionRequireOneTargetFpFloorOption",],{unique:true})
export class tblFPFloorOptionRequireOne {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPFloorOptionRequireOneID"
        })
    intFPFloorOptionRequireOneID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPFloorOptionRequireOneFPFloorOptionID"
        })
    intFPFloorOptionRequireOneFPFloorOptionID:number;
        

   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpFloorOptionRequireOnes,{  nullable:false, })
    @JoinColumn({ name:'intFPFloorOptionRequireOneTargetFPFloorOptionID'})
    intFpFloorOptionRequireOneTargetFpFloorOption:tblFPFloorOption | null;

}
