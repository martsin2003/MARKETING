import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPFloorOption} from "./tblFPFloorOption";


@Entity("tblFPFloorOptionRequire",{schema:"public" } )
@Index("idx_17872_IX_tblFPFloorOptionRequire",["intFpFloorOptionRequireFpFloorOption","intFpFloorOptionRequireTargetFpFloorOption",],{unique:true})
export class tblFPFloorOptionRequire {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPFloorOptionRequireID"
        })
    intFPFloorOptionRequireID:string;
        

   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpFloorOptionRequires,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intFPFloorOptionRequireFPFloorOptionID'})
    intFpFloorOptionRequireFpFloorOption:tblFPFloorOption | null;


   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpFloorOptionRequires2,{  nullable:false, })
    @JoinColumn({ name:'intFPFloorOptionRequireTargetFPFloorOptionID'})
    intFpFloorOptionRequireTargetFpFloorOption:tblFPFloorOption | null;

}
