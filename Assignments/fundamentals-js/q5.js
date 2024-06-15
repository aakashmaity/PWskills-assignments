function calculateDeliveryTime(packageType) {
  switch (packageType) {
    case "standard":
      console.log("Estimated delivery time for standard package: 3-5 days");
      break;
    case "express":
      console.log("Estimated delivery time for express package: 1-2 days");
      break;
    case "overnight":
      console.log("Estimated delivery time for overnight package: next day");
      break;
    default:
      console.log(
        'Invalid package type. Please enter "standard", "express", or "overnight".'
      );
  }
}

// Example usage:
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
