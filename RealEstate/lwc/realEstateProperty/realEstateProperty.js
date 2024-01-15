import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import getPropertiesbyId from '@salesforce/apex/realEstateProperties.getPropertiesbyId';
export default class RealEstateProperty extends LightningElement {

     @api property;
    @api  mapMakers ;

    recordId;

    // connectedCallback() {

    // }

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
            console.log('OUTPUT : ', currentPageReference.state?.recordId);
            this.recordId = currentPageReference.state?.recordId;
        }
        this.loadProperty();
    }

    loadProperty() {
        getPropertiesbyId({ recordId: this.recordId })
            .then(result => {
                console.log('Selected Property : ', result);
                this.property = result;
                let propertyLocation = { ...result };
                if (propertyLocation.Location__c) {
                    this.mapMakers = [
                        {
                            location: {
                                Latitude: propertyLocation.Location__c.latitude,
                                Longitude: propertyLocation.Location__c.longitude
                            },
                            title: propertyLocation.Name,
                            description: 'Test'
                        }
                    ];
                    console.log('Map Data:', this.mapMakers);
                }

                let propertyAbout = { ...result };
                if (propertyAbout.About_Property__c) {
                    const aboutProperty = propertyAbout.About_Property__c;
                    const aboutPropertySplit = aboutProperty.split(".,"); // Split by period (.)
                    this.property = { ...this.property, aboutPropertySplit };
                    console.log('About Data', this.property.aboutPropertySplit);
                } else {
                    this.property = { ...this.property, aboutPropertySplit: [] };
                }
                let propertyInterior = { ...result };
                if (propertyInterior.Interior_Images__c) {
                    const interiorImages = propertyInterior.Interior_Images__c;
                    const imageUrls = interiorImages.split(",");
                    this.property = { ...this.property, interiorImages: imageUrls };
                    console.log('About interior ', this.property.interiorImages);
                } else {
                    this.property = { ...this.property, interiorImages: [] };
                }

            })
            .catch(error => {
                console.error('Error fetching portfolio record', error);
            });
    }

}