import { Dialog } from "primereact/dialog";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "@/components/card/CheckoutForm";

interface AddCardModal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLEKEY as string);

function AddCardModal({ visible, setVisible }: AddCardModal) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5001/v1/payment/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", price:400 }, { id: "xl-pant", price:7000 }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.data);
        console.log(data.data);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Dialog
      header="Add New Card"
      visible={visible}
      onHide={() => setVisible(false)}
      breakpoints={{ "960px": "75vw", "640px": "100vw" }}
      style={{ width: "34vw" }}
    >
      {/* <AddCard setVisible={setVisible} /> */}
      {clientSecret && (
        // @ts-ignore
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Dialog>
  );
}

export default AddCardModal;
