import { LightningElement } from 'lwc';
import getAbout from '@salesforce/apex/realEstateAbout.getAbout';

export default class RealEstateAbout extends LightningElement {
    aboutDetails;

    connectedCallback() {
        this.loadAbout();
    }

loadAbout() {
    getAbout()
        .then(result => {
            let updatedDetails = { ...result }; // Create a local copy of the object

            if (updatedDetails.our_Mission_Text__c) {
                const missionParagraphs = updatedDetails.our_Mission_Text__c.split(".,");
                updatedDetails.our_Mission_Text__c = missionParagraphs;
                console.log("Mission paragraphs:", updatedDetails.our_Mission_Text__c);
            }

            if (updatedDetails.our_Story_Text__c) {
                const storyParagraphs = updatedDetails.our_Story_Text__c.split(".,");
                updatedDetails.our_Story_Text__c = storyParagraphs;
                console.log("Story paragraphs:", updatedDetails.our_Story_Text__c);
            }

            // Assign the updated data to the component attribute
            this.aboutDetails = updatedDetails;
        })
        .catch(error => {
            console.error('Error fetching about details:', error);
        });
}

}