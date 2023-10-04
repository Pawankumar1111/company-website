import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css";

const Countrycode = () => {
  const [value, setValue] = useState();
  return (
    <>
      <PhoneInput
        defaultCountry="US"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </>
  );
};
export default Countrycode;
