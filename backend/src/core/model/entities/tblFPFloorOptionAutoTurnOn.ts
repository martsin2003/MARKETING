import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPFloorOption} from "./tblFPFloorOption";


@Entity("tblFPFloorOptionAutoTurnOn",{schema:"public" } )
export class tblFPFloorOptionAutoTurnOn {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPFloorOptionAutoTurnOnID"
        })
    intFPFloorOptionAutoTurnOnID:string;
        

   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpFloorOptionAutoTurnOns,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intFPFloorOptionAutoTurnOnFPFloorOptionID'})
    intFpFloorOptionAutoTurnOnFpFloorOption:tblFPFloorOption | null;


   
    @ManyToOne(type=>tblFPFloorOption, tblFPFloorOption=>tblFPFloorOption.tblFpFloorOptionAutoTurnOns2,{  nullable:false, })
    @JoinColumn({ name:'intFPFloorOptionAutoTurnOnTargetFPFloorOptionID'})
    intFpFloorOptionAutoTurnOnTargetFpFloorOption:tblFPFloorOption | null;

}
