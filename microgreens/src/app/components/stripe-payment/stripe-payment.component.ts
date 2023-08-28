import { Component } from '@angular/core';

declare var Stripe: any;

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
})
export class StripePaymentComponent {

  constructor() {

  }

  ngOnInit() {
    // Your Stripe public key
    const stripe = Stripe('pk_test_51NHHwxLrrztLxkK6HMAInpALnesNfmfL8dN8W5HZBwACJJSZCOgcUHLac1XVNw2BxXCW9Y1EmAgLNnvx13SqPesf00dkUuumGM');

    // Create `card` element that will watch for updates
    // and display error messages
    const elements = stripe.elements();
    const card = elements.create('card');

    card.mount('#card-element');
    card.addEventListener('change', (event: { error: { message: string | null; }; }) => {
      const displayError = document.getElementById('card-errors') || { textContent: '' };
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    // Listen for form submission, process the form with Stripe,
    // and get the 
    const paymentForm: any | null = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      stripe.createToken(card).then((result: { error: { message: string | null; }; token: { id: any; }; }) => {
        if (result.error) {
          console.log('Error creating payment method.');
          const errorElement: any | null = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          // At this point, you should send the token ID
          // to your server so it can attach
          // the payment source to a customer
          console.log('Token acquired!');
          console.log(result.token);
          console.log(result.token.id);
        }
      });
    });
  }
}
