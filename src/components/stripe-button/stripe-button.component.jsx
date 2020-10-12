import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HR2xFGC6jkvHvjfcXY7h2O3oJcwat4XEBUsqiTlRbcCvhZRbYKBVmDGLCR5vVIz2HqVCfBJgsOAjpIEBFv6mgkM00jEJwMRKo';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='MODERN CLOTHING Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

         />
    )
};

export default StripeCheckoutButton;