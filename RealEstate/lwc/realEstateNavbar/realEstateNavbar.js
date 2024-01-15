import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class RealEstateNavbar extends NavigationMixin(LightningElement) {

    handleAboutUs() {
 
            this[NavigationMixin.Navigate]({
                 type: 'standard__webPage',
                attributes: {
                    url: 'About'
                }
            });

    }


    handleContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'contact'
            },
        });

    }

    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/'
            },
        });

    }

}