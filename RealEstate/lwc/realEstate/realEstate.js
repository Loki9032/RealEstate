import { LightningElement, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getProperties from '@salesforce/apex/realEstateProperties.getProperties';

export default class RealEstate extends NavigationMixin(LightningElement) {
    @track properties = [];

    @wire(getProperties)
    wiredProperties({ error, data }) {
        if (data) {
            this.properties = data;
        } else if (error) {
            console.error('Error fetching real estate properties:', error);
        }
    }

    redirectToProperty(event) {
        const propertyId = event.currentTarget.dataset.id;
        // const selectedProperty = this.properties.find(prop => prop.Id === propertyId);
        // console.log('selected Data:', selectedProperty);
        if (propertyId) {
            // if (selectedProperty.Location__c) {
            //     this.mapMarkers = [{
            //         location: {
            //             Latitude: selectedProperty.Location__c.latitude,
            //             Longitude: selectedProperty.Location__c.longitude
            //         },
            //         title: selectedProperty.Name,
            //         description: 'Test'
            //     }];
            //     console.log('Map Data:', this.mapMarkers);
            // }

            // this.selectedProperty = { ...selectedProperty };

            // if (selectedProperty.About_Property__c) {
            //     const aboutProperty = selectedProperty.About_Property__c.valueOf();
            //     const aboutPropertySplit = aboutProperty.split(".,");
            //     this.selectedProperty.aboutPropertySplit = aboutPropertySplit;
            //     console.log('About Data',this.selectedProperty.aboutPropertySplit);
            // } else {
            //     this.selectedProperty.aboutPropertySplit = []; 
            // }

            // if (selectedProperty.Interior_Images__c) {
            //     const interiorImages = selectedProperty.Interior_Images__c.valueOf();
            //     const imageUrls = interiorImages.split(",");
            //     this.selectedProperty.interiorImages = imageUrls;
            //     console.log('About interior ',this.selectedProperty.interiorImages);
            // } else {
            //     this.selectedProperty.interiorImages = []; 
            // }



            // let compDefinition = {
            //     componentDef: 'c:realEstateProperty',
            //     attributes: {
            //         property: this.selectedProperty,
            //         mapMakers: this.mapMarkers

            //     }
            // };

            // console.log('redirect Data ',compDefinition);

            // let compDef64 = btoa(JSON.stringify(compDefinition));

            // this[NavigationMixin.Navigate]({
            //     type: 'standard__webPage',
            //     attributes: {
            //         url: '/one/one.app#' + compDef64
            //     }
            // });

             this[NavigationMixin.Navigate]({
                 type: 'comm__namedPage',
                attributes: {
                    name: 'PrimePeak_Estates_Property__c',
                },
                state:{
                    recordId:propertyId
                }
            });

        } else {
            console.log('Selected property not found.');
        }
    }
}