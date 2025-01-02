/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      toast.error("Feedback cannot be empty.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://yourapi.com/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });

      if (response.ok) {
        toast.success("Thank you for your feedback!");
        setFeedback("");
      } else {
        const errorData = await response.json();
        toast.error(errorData?.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Unable to send feedback. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-[1rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] py-[2rem] w-[100%] relative object-cover">
      <div className="flex flex-col justify-center w-[100%] text-center gap-[1rem]">
        <h2 className="text-[2.5rem] text-[#212121] text-center capitalize">
          Send Us Feedback
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
          <textarea
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            className="w-[100%] resize-none px-[2rem] py-[2rem] border-[1px] border-[grey] rounded-md text-[2rem] text-[#414141]
            max-md:text-[1.6rem] outline-none capitalize"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-[100%] text-[2rem] px-[2rem] py-[0.5rem] rounded-md text-[white] transition-all duration-[0.4s] ease-linear ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactFeedback;
