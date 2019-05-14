import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFBuyerType} from "./tblMBFBuyerType";
import {tblMBFLot} from "./tblMBFLot";
import {tblMBFAppointmentBuyer} from "./tblMBFAppointmentBuyer";
import {tblMBFBuyerDevice} from "./tblMBFBuyerDevice";
import {tblMBFBuyerPasswordReset} from "./tblMBFBuyerPasswordReset";
import {tblMBFDashboard} from "./tblMBFDashboard";
import {tblMBFLogin} from "./tblMBFLogin";
import {tblMBFMessage} from "./tblMBFMessage";


@Entity("tblMBFBuyer",{schema:"public" } )
@Index("idx_18317_IX_tblMBFBuyer",["bMBFBuyerDocumentEmailNotifications","bMBFBuyerDocumentPushNotifications","bMBFBuyerGeneralEmailNotifications","bMBFBuyerGeneralPushNotifications","bMBFBuyerPasswordReset","bMBFBuyerScheduleEmailNotifications","bMBFBuyerSchedulePushNotifications","bMBFBuyerToDoEmailNotifications","bMBFBuyerToDoPushNotifications","dteMBFBuyerModifiedDate","intMBFBuyerID","intMbfBuyerLot","intMbfBuyerType","varMBFBuyerEmailAddress","varMBFBuyerLastName",],{unique:true})
export class tblMBFBuyer {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFBuyerID"
        })
    intMBFBuyerID:string;
        

   
    @ManyToOne(type=>tblMBFBuyerType, tblMBFBuyerType=>tblMBFBuyerType.tblMbfBuyers,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFBuyerTypeID'})
    intMbfBuyerType:tblMBFBuyerType | null;


   
    @ManyToOne(type=>tblMBFLot, tblMBFLot=>tblMBFLot.tblMbfBuyers,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFBuyerLotID'})
    intMbfBuyerLot:tblMBFLot | null;


    @Column("text",{ 
        nullable:false,
        name:"varMBFBuyerFirstName"
        })
    varMBFBuyerFirstName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFBuyerLastName"
        })
    varMBFBuyerLastName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFBuyerEmailAddress"
        })
    varMBFBuyerEmailAddress:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerPhone"
        })
    varMBFBuyerPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerRelationship"
        })
    varMBFBuyerRelationship:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerImageFile"
        })
    varMBFBuyerImageFile:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerScheduleEmailNotifications"
        })
    bMBFBuyerScheduleEmailNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerSchedulePushNotifications"
        })
    bMBFBuyerSchedulePushNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerToDoEmailNotifications"
        })
    bMBFBuyerToDoEmailNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerToDoPushNotifications"
        })
    bMBFBuyerToDoPushNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerDocumentEmailNotifications"
        })
    bMBFBuyerDocumentEmailNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerDocumentPushNotifications"
        })
    bMBFBuyerDocumentPushNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerGeneralEmailNotifications"
        })
    bMBFBuyerGeneralEmailNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFBuyerGeneralPushNotifications"
        })
    bMBFBuyerGeneralPushNotifications:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerPassword"
        })
    varMBFBuyerPassword:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerPasswordSalt"
        })
    varMBFBuyerPasswordSalt:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerPasswordReset"
        })
    bMBFBuyerPasswordReset:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFBuyerCreatedDate"
        })
    dteMBFBuyerCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFBuyerModifiedDate"
        })
    dteMBFBuyerModifiedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMBFBuyerLastLoginDate"
        })
    dteMBFBuyerLastLoginDate:Date | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerInitialPasswordSet"
        })
    bMBFBuyerInitialPasswordSet:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerPhotoPushNotifications"
        })
    bMBFBuyerPhotoPushNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerPhotoEmailNotifications"
        })
    bMBFBuyerPhotoEmailNotifications:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerActivatedFlg"
        })
    bMBFBuyerActivatedFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerActivationEmailSentFlg"
        })
    bMBFBuyerActivationEmailSentFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMBFBuyerActivationDate"
        })
    dteMBFBuyerActivationDate:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"intMBFBuyerAPIID"
        })
    intMBFBuyerAPIID:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerCellPhone"
        })
    varMBFBuyerCellPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerWorkPhone"
        })
    varMBFBuyerWorkPhone:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerAPIAllowLoginFlg"
        })
    bMBFBuyerAPIAllowLoginFlg:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varMBFBuyerAPIInitialPassword"
        })
    varMBFBuyerAPIInitialPassword:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFBuyerMessageIndex"
        })
    intMBFBuyerMessageIndex:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFBuyerTermsAndPrivacyPolicyAcceptedFlg"
        })
    bMBFBuyerTermsAndPrivacyPolicyAcceptedFlg:boolean;
        

   
    @OneToMany(type=>tblMBFAppointmentBuyer, tblMBFAppointmentBuyer=>tblMBFAppointmentBuyer.intMbfAppointmentBuyerBuyer,{ onDelete: 'CASCADE' , })
    tblMbfAppointmentBuyers:tblMBFAppointmentBuyer[];
    

   
    @OneToMany(type=>tblMBFBuyerDevice, tblMBFBuyerDevice=>tblMBFBuyerDevice.intMbfBuyerDeviceMbfBuyer,{ onDelete: 'CASCADE' , })
    tblMbfBuyerDevices:tblMBFBuyerDevice[];
    

   
    @OneToMany(type=>tblMBFBuyerPasswordReset, tblMBFBuyerPasswordReset=>tblMBFBuyerPasswordReset.intMbfBuyerPasswordResetMbfBuyer,{ onDelete: 'CASCADE' , })
    tblMbfBuyerPasswordResets:tblMBFBuyerPasswordReset[];
    

   
    @OneToMany(type=>tblMBFDashboard, tblMBFDashboard=>tblMBFDashboard.intMbfDashboardBuyer,{ onDelete: 'CASCADE' , })
    tblMbfDashboards:tblMBFDashboard[];
    

   
    @OneToMany(type=>tblMBFLogin, tblMBFLogin=>tblMBFLogin.intMbfLoginBuyer,{ onDelete: 'CASCADE' , })
    tblMbfLogins:tblMBFLogin[];
    

   
    @OneToMany(type=>tblMBFMessage, tblMBFMessage=>tblMBFMessage.intMbfMessageMbfBuyer,{ onDelete: 'CASCADE' , })
    tblMbfMessages:tblMBFMessage[];
    
}
