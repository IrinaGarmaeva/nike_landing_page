import { useState } from "react";
import {toast} from 'react-toastify'
import Button from "../../components/Button/Button";
import {
  VALIDATION__MESSAGES,
  PATTERN_EMAIL,
} from "../../common/emailValidationConstants";
import { arrowRight } from "../../assets/icons";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // const [isValid, setIsValid] = useState(false)

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);

    if (!PATTERN_EMAIL.test(e.target.value)) {
      setError(VALIDATION__MESSAGES.invalidEmail);
      !e.target.value && setError("")
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email) {
      setError(VALIDATION__MESSAGES.invalidEmail)
    } else {
      setEmail("");
      toast.success(VALIDATION__MESSAGES.validEmail)
    }
  };

  return (
    <section
      id="contact-us"
      className="padding-x sm:py-32 py-16 w-full max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold dark:text-white">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex flex-col min-h-full">
        <form
          className=" w-full flex items-center gap-5 p-2.5 border border-slate-gray rounded-full"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row lg:w-96 pl-1 max-sm:w-full">
            <input
              value={email}
              type="email"
              placeholder="Email address"
              className="input bg-transparent dark:text-white"
              name="email"
              onChange={handleChangeEmail}
              autoComplete="off"
            />
            <div className=" w-[86px]">
              <Button fullWidth iconUrl={arrowRight}/>
            </div>
          </div>
        </form>
        <span className="mt-3 text-coral-red pl-[27px]  min-h-6">{error}</span>
      </div>
    </section>
  );
};

export default Subscribe;
