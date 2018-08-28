class facebook{
    protected id:number;
    protected name:string;
    protected mobileNumber:number;
    protected birthDate:string;
    protected email:string;
    protected age:number;

    constructor(id:number,name:string,mobileNumber:number,birthDate:string,email:string,age:number){

        this.id=id;
        this.name=name;
        this.mobileNumber=mobileNumber;
        this.birthDate=birthDate;
        this.email=email;
        this.age=age;
    }
    getId=()=>{
        return this.id;
    }
    getName=()=>{
        return this.name;
    }
    getmobileNumber=()=>{
        return this.mobileNumber;
    }
    getbirthDate=()=>{
        return this.birthDate;
    }
    getEmail=()=>{
        return this.email;
    }
    getAge=()=>{
        return this.age;
    }
}
class workAndEducation extends facebook{

    workPlace:string[];
    schoolName:string[];
    professionalSkills:string[];  

    constructor(id:number,name:string,mobileNumber:number,birthDate:string,email:string,age:number,workPlace:string[],
        schoolName:string[],professionalSkills:string[]){
            super(id,name,mobileNumber,birthDate,email,age);
            this.workPlace=workPlace;
            this.schoolName=schoolName;
            this.professionalSkills=professionalSkills;
        }
        setworkPlace=(...result:string[])=>{
            this.workPlace=result;
        }

}

class placesYouHaveLived extends facebook{
    currentCity:string;
    homeTown:string;
    constructor(id:number,name:string,mobileNumber:number,birthDate:string,email:string,age:number,currentCity:string,
        homeTown:string){
        super(id,name,mobileNumber,birthDate,email,age);
        this.currentCity=currentCity;
        this.homeTown=homeTown;
        }
}
class basicInfo extends facebook{
    gender:string;
    interestedIn:string;
    languagesKnown:any;
    religiousViews:string;
    constructor(id:number,name:string,mobileNumber:number,birthDate:string,email:string,age:number,gender:string,
        interestedIn:string,languagesKnown:any,religiousViews:string){
        super(id,name,mobileNumber,birthDate,email,age);
        this.gender=gender;
        this.interestedIn=interestedIn;
        this.languagesKnown=languagesKnown;
        this.religiousViews=religiousViews;
    }

}
class familyAndRelationships extends facebook{
    relationshipStatus:string;
    familyMembers:any;

    constructor(id:number,name:string,mobileNumber:number,birthDate:string,email:string,age:number,
        relationshipStatus:string,familyMembers:any){
        super(id,name,mobileNumber,birthDate,email,age);
        this.relationshipStatus=relationshipStatus;
        this.familyMembers=familyMembers;
    }
}
class detailsAboutYou extends facebook{
    aboutYou:string[];
    otherNames:string[];
    favouriteQuotes:any;
    constructor(id:number,name:string,mobileNumber:number,birthDate:string,email:string,age:number,
        aboutYou:string[],otherNames:string[],favouriteQuotes?:any){
        super(id,name,mobileNumber,birthDate,email,age);
        this.aboutYou=aboutYou;
        this.otherNames=otherNames;
        this.favouriteQuotes=favouriteQuotes;
    }
}
class lifeEvents extends facebook{
    lifeEvents:any;

    constructor(id:number,name:string,mobileNumber:number,birthDate:string,email:string,age:number,
        lifeEvents?:any){
        super(id,name,mobileNumber,birthDate,email,age);
        this.lifeEvents=lifeEvents;
        }

        setLifeEvents=(result:string)=>{
            this.lifeEvents=result;
        

    }
}

let User_personalDetails=new facebook(101,"shubham",123456789,"01Jan1984","abc@example.com",24);
console.log(`id:${User_personalDetails.getId()}`);
console.log(`name:${User_personalDetails.getName()}`);
console.log(`mobile number:${User_personalDetails.getmobileNumber()}`);
console.log(`Birth date:${User_personalDetails.getbirthDate()}`);
console.log(`Email id:${User_personalDetails.getEmail()}`);
console.log(`age:${User_personalDetails.getAge()}`);

let user_EducationDetails=new workAndEducation(101,"shubham",123456789,"01Jan1984","abc@example.com",24,["TCS","INFY"],["DPS"],
                                ["MeanStackDeveloper","java"])
console.log(`Initial workplace:${user_EducationDetails.workPlace}`);
user_EducationDetails.setworkPlace("ABC","DEF","GHI");
console.log(`changed workPlace:${user_EducationDetails.workPlace}`);

let user_PlacesLived=new placesYouHaveLived(101,"shubham",123456789,"01Jan1984","abc@example.com",24,"gurgaon","Jodhpur");
console.log(`Current City:${user_PlacesLived.currentCity}`);
console.log(`Home Town:${user_PlacesLived.homeTown}`);

let user_lifeEventDetails=new lifeEvents(101,"shubham",123456789,"01Jan1984","abc@example.com",24);
user_lifeEventDetails.setLifeEvents(`born on ${user_lifeEventDetails.getbirthDate()}`);
console.log(`life Events:${user_lifeEventDetails.lifeEvents}`);

let user_BasicInfo=new basicInfo(101,"shubham",123456789,"01Jan1984","abc@example.com",24,"male","female",
                        ["English","Hindi"],"Hindu");
console.log(`Gender:${user_BasicInfo.gender}`);
console.log(`Interested in:${user_BasicInfo.interestedIn}`);
console.log(`Languages Known:${user_BasicInfo.languagesKnown}`);
console.log(`Religious Views:${user_BasicInfo.religiousViews}`);

let user_FamilyDetails=new familyAndRelationships(101,"shubham",123456789,"01Jan1984","abc@example.com",24,"Single",
                            ["brother:mohit","sister:kavya"]);
console.log(`Relationship Status:${user_FamilyDetails.relationshipStatus}`);
console.log(`Family Members:${user_FamilyDetails.familyMembers}`); 

let user_DetailsAboutYou=new detailsAboutYou(101,"shubham",123456789,"01Jan1984","abc@example.com",24,
                        [`I am cool, simple and friendly... Love to write poems and dramas , 
                        chatting with friends and enjoying life to the fullest.....
                        `],["tak","shubh"]);
console.log(`About Me:${user_DetailsAboutYou.aboutYou}`);
console.log(`Other Names:${user_DetailsAboutYou.otherNames}`);
user_DetailsAboutYou.favouriteQuotes=["You can do anything, but not everything. ...",
"The richest man is not he who has the most, but he who needs the least. ..."];
console.log(`Favourite Quotes:${user_DetailsAboutYou.favouriteQuotes}`);

