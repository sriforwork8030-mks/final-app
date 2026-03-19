import '@shopify/ui-extensions/preact';
import { render } from "preact";

// Entry point
export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-banner heading="Checkout Customization" tone="success">
      🎉 Thank you for shopping with us!
    </s-banner>
    
  );
}