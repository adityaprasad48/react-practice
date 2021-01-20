import { getNumber, randomElement } from "./helperMethods";

let sameName = randomElement;

export const data = {
  sales_customer: {
    name: sameName,
    sales_person_id: 4,
    client_type: 1,
    street_address: "South Avalon Glitz park",
    city: "Banguluru",
    state: "Karnatka",
    zipcode: "560003",
    country: "India",
    business_phone_number: getNumber(),
    business_whatsapp_number: getNumber(),
    business_email: `${sameName}@gmail.com`,
    poc_name: sameName,
    poc_phone_number: getNumber(),
    poc_whatsapp_number: getNumber(),
    poc_email: `${sameName}@gmail.com`,
    preferred_phone_number: true,
    preferred_whatsapp_number: true,
    preferred_email: true,
    status_id: 1,
    notes: "Hi there its me who is going to be your first customer",
    card_details: "123456789",
    // success_status: true,
    discount: 0,
    markups: 40.85,
    save_cards_attributes: [
      {
        customer_id: 1,
        card_number: getNumber(),
        exp_month: "12",
        exp_year: "2021",
        cvv: "123",
        card_holder_name: sameName,
        set_primary: true,
      },
      {
        customer_id: 1,
        card_number: getNumber(),
        exp_month: "12",
        exp_year: "2021",
        cvv: "123",
        card_holder_name: randomElement,
        set_primary: false,
      },
    ],
  },
};
