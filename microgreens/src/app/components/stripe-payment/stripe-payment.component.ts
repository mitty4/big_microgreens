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
          this.sendPayment({ token: result.token.id, amount: 1000 })
        }
      });
    });
  }

  public async sendPayment(content: any) {
    const myUrl: string = "https://j3yhgrjad6oucnt4bgyg3d733y0ldtay.lambda-url.us-east-1.on.aws/";
    const headers: any = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'false',
      'Content-Type': 'application/json'
    };
    const response = await fetch(myUrl, {
      method: 'POST',
      body: content,
      mode: 'no-cors',
      headers: headers });

    if (!response.ok) { /* Handle */ }

    // If you care about a response:
    if (response.body !== null) {
      console.log(response.body);
      // body is ReadableStream<Uint8Array>
      // parse as needed, e.g. reading directly, or
      // const asString = new TextDecoder("utf-8").decode(response.body);
      // // and further:
      // const asJSON = JSON.parse(asString);  // implicitly 'any', make sure to verify type on runtime.
    }
  }
}
