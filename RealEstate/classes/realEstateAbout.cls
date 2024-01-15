public with sharing class  realEstateAbout {
    
    @AuraEnabled(cacheable=true)
    public static real_Estate_About__c getAbout(){
 		real_Estate_About__c about = [select Id, Name,our_Mission_Image__c, 
                                              our_Story_Image__c, our_Mission_Text__c, our_Story_Text__c
                                              from real_Estate_About__c 
                                              ];
        return about;
    }

}