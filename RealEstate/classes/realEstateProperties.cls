public class realEstateProperties {
     @AuraEnabled(cacheable=true)
    public static list<Real_Estate_properties__c> getProperties(){
 		list<Real_Estate_properties__c> Properties=[select Id, Name, Property_Image__c 
                                              from Real_Estate_properties__c 
                                              ];
        return Properties;
    }
     @AuraEnabled(cacheable=true)
    public static Real_Estate_properties__c getPropertiesbyId(String recordId){
 		Real_Estate_properties__c Propertie=[select Id, Name, Property_Image__c, About_Property__c, 
                                              Property_Value__c, Location__c, Interior_Images__c, 
                                              Agent_Name__c, Agent_Phone__c, Agent_Email__c,Agent_Photo__c
                                              from Real_Estate_properties__c where id =: recordId
                                              ];
        return Propertie;
    }

}