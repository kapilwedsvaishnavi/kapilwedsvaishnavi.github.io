import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import kapil_vaishnavi from "../assets/kapi-vaishnavi.jpeg";

   const serviceID = 'default_service';
   const templateID = 'template_wejasdd';
   const publicKey = 'T4tyZWuV51hJd7qac'

const Rsvp = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ type: string; msg: string } | null>(
    null
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey
      )
      .then(
        () => {
          setStatus({ type: "success", msg: "Thank you! Your RSVP is submitted." });
          formRef.current?.reset();
        },
        () => {
          setStatus({
            type: "error",
            msg: "Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <section id="rsvp" className="rsvp-section p-5">
      <div className="container flex flex-col lg:flex-row mx-auto w-full">
        
        {/* LEFT FORM SIDE */}
        <div className="w-full lg:w-[50%] border-1 border-green-500 p-5 flex justify-center items-center">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 border border-green-500 p-6 w-full"
          >
            <h2 className="text-2xl font-serif text-green-500 mb-4 playwrite-au-tas-wedding">
              Are you attending our wedding?
            </h2>

            <div className="relative z-0 w-full mb-5 group text-green-500">
              <input
                type="text"
                name="name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-1 border-default-medium focus:outline-none peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10">
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group text-green-500">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-1 border-default-medium focus:outline-none peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10">
                Email
              </label>
            </div>

            <div className="mb-5 text-green-500">
              <label className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  className="form-radio text-green-500"
                  name="attendance"
                  value="Yes, I will attend"
                  required
                />
                <span className="ml-2">Yes, I will attend</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-green-500"
                  name="attendance"
                  value="No, I can't make it"
                  required
                />
                <span className="ml-2">No, I can't make it</span>
              </label>
            </div>

            <button
              type="submit"
              className="m-auto w-30 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              RSVP
            </button>

            {/* STATUS MESSAGE */}
            {status && (
              <p
                className={`text-center mt-3 ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="w-full lg:w-[50%] justify-center items-center relative">
          <img
            src={kapil_vaishnavi}
            alt="Rsvp"
            className="w-full h-auto"
            style={{ width: "100%" }}
          />
          <div className="w-[90%] h-[90%] absolute border border-green-800 top-[5%] left-[5%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;
