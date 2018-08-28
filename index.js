var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var facebook = /** @class */ (function () {
    function facebook(id, name, mobileNumber, birthDate, email, age) {
        var _this = this;
        this.getId = function () {
            return _this.id;
        };
        this.getName = function () {
            return _this.name;
        };
        this.getmobileNumber = function () {
            return _this.mobileNumber;
        };
        this.getbirthDate = function () {
            return _this.birthDate;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.id = id;
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.birthDate = birthDate;
        this.email = email;
        this.age = age;
    }
    return facebook;
}());
var workAndEducation = /** @class */ (function (_super) {
    __extends(workAndEducation, _super);
    function workAndEducation(id, name, mobileNumber, birthDate, email, age, workPlace, schoolName, professionalSkills) {
        var _this = _super.call(this, id, name, mobileNumber, birthDate, email, age) || this;
        _this.setworkPlace = function () {
            var result = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                result[_i] = arguments[_i];
            }
            _this.workPlace = result;
        };
        _this.workPlace = workPlace;
        _this.schoolName = schoolName;
        _this.professionalSkills = professionalSkills;
        return _this;
    }
    return workAndEducation;
}(facebook));
var placesYouHaveLived = /** @class */ (function (_super) {
    __extends(placesYouHaveLived, _super);
    function placesYouHaveLived(id, name, mobileNumber, birthDate, email, age, currentCity, homeTown) {
        var _this = _super.call(this, id, name, mobileNumber, birthDate, email, age) || this;
        _this.currentCity = currentCity;
        _this.homeTown = homeTown;
        return _this;
    }
    return placesYouHaveLived;
}(facebook));
var basicInfo = /** @class */ (function (_super) {
    __extends(basicInfo, _super);
    function basicInfo(id, name, mobileNumber, birthDate, email, age, gender, interestedIn, languagesKnown, religiousViews) {
        var _this = _super.call(this, id, name, mobileNumber, birthDate, email, age) || this;
        _this.gender = gender;
        _this.interestedIn = interestedIn;
        _this.languagesKnown = languagesKnown;
        _this.religiousViews = religiousViews;
        return _this;
    }
    return basicInfo;
}(facebook));
var familyAndRelationships = /** @class */ (function (_super) {
    __extends(familyAndRelationships, _super);
    function familyAndRelationships(id, name, mobileNumber, birthDate, email, age, relationshipStatus, familyMembers) {
        var _this = _super.call(this, id, name, mobileNumber, birthDate, email, age) || this;
        _this.relationshipStatus = relationshipStatus;
        _this.familyMembers = familyMembers;
        return _this;
    }
    return familyAndRelationships;
}(facebook));
var detailsAboutYou = /** @class */ (function (_super) {
    __extends(detailsAboutYou, _super);
    function detailsAboutYou(id, name, mobileNumber, birthDate, email, age, aboutYou, otherNames, favouriteQuotes) {
        var _this = _super.call(this, id, name, mobileNumber, birthDate, email, age) || this;
        _this.aboutYou = aboutYou;
        _this.otherNames = otherNames;
        _this.favouriteQuotes = favouriteQuotes;
        return _this;
    }
    return detailsAboutYou;
}(facebook));
var lifeEvents = /** @class */ (function (_super) {
    __extends(lifeEvents, _super);
    function lifeEvents(id, name, mobileNumber, birthDate, email, age, lifeEvents) {
        var _this = _super.call(this, id, name, mobileNumber, birthDate, email, age) || this;
        _this.setLifeEvents = function (result) {
            _this.lifeEvents = result;
        };
        _this.lifeEvents = lifeEvents;
        return _this;
    }
    return lifeEvents;
}(facebook));
var User_personalDetails = new facebook(101, "shubham", 123456789, "01Jan1984", "abc@example.com", 24);
console.log("id:" + User_personalDetails.getId());
console.log("name:" + User_personalDetails.getName());
console.log("mobile number:" + User_personalDetails.getmobileNumber());
console.log("Birth date:" + User_personalDetails.getbirthDate());
console.log("Email id:" + User_personalDetails.getEmail());
console.log("age:" + User_personalDetails.getAge());
var user_EducationDetails = new workAndEducation(101, "shubham", 123456789, "01Jan1984", "abc@example.com", 24, ["TCS", "INFY"], ["DPS"], ["MeanStackDeveloper", "java"]);
console.log("Initial workplace:" + user_EducationDetails.workPlace);
user_EducationDetails.setworkPlace("ABC", "DEF", "GHI");
console.log("changed workPlace:" + user_EducationDetails.workPlace);
var user_PlacesLived = new placesYouHaveLived(101, "shubham", 123456789, "01Jan1984", "abc@example.com", 24, "gurgaon", "Jodhpur");
console.log("Current City:" + user_PlacesLived.currentCity);
console.log("Home Town:" + user_PlacesLived.homeTown);
var user_lifeEventDetails = new lifeEvents(101, "shubham", 123456789, "01Jan1984", "abc@example.com", 24);
user_lifeEventDetails.setLifeEvents("born on " + user_lifeEventDetails.getbirthDate());
console.log("life Events:" + user_lifeEventDetails.lifeEvents);
var user_BasicInfo = new basicInfo(101, "shubham", 123456789, "01Jan1984", "abc@example.com", 24, "male", "female", ["English", "Hindi"], "Hindu");
console.log("Gender:" + user_BasicInfo.gender);
console.log("Interested in:" + user_BasicInfo.interestedIn);
console.log("Languages Known:" + user_BasicInfo.languagesKnown);
console.log("Religious Views:" + user_BasicInfo.religiousViews);
var user_FamilyDetails = new familyAndRelationships(101, "shubham", 123456789, "01Jan1984", "abc@example.com", 24, "Single", ["brother:mohit", "sister:kavya"]);
console.log("Relationship Status:" + user_FamilyDetails.relationshipStatus);
console.log("Family Members:" + user_FamilyDetails.familyMembers);
var user_DetailsAboutYou = new detailsAboutYou(101, "shubham", 123456789, "01Jan1984", "abc@example.com", 24, ["I am cool, simple and friendly... Love to write poems and dramas , \n                        chatting with friends and enjoying life to the fullest.....\n                        "], ["tak", "shubh"]);
console.log("About Me:" + user_DetailsAboutYou.aboutYou);
console.log("Other Names:" + user_DetailsAboutYou.otherNames);
user_DetailsAboutYou.favouriteQuotes = ["You can do anything, but not everything. ...",
    "The richest man is not he who has the most, but he who needs the least. ..."];
console.log("Favourite Quotes:" + user_DetailsAboutYou.favouriteQuotes);
