import { useState } from "react";
import Button from "../../components/Button/Button";
import {
  VALIDATION__MESSAGES,
  PATTERN_EMAIL,
} from "../../common/emailValidationConstants";
import { arrowRight } from "../../assets/icons";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);

    if (!PATTERN_EMAIL.test(e.target.value)) {
      setError(VALIDATION__MESSAGES.invalidEmail);
      !e.target.value && setError("");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section
      id="contact-us"
      className="padding-x sm:py-32 py-16 w-full max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex flex-col">
        <form
          className=" w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row w-[380px]">
            <input
              value={email}
              type="email"
              placeholder="Email address"
              className="input"
              name="email"
              onChange={handleChangeEmail}
            />
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
              <Button label="Sign Up" fullWidth iconUrl={arrowRight}/>
            </div>
          </div>
        </form>
        <span className="mt-3 text-coral-red pl-5 max-lg:self-center">{error}</span>
      </div>
    </section>
  );
};

export default Subscribe;
