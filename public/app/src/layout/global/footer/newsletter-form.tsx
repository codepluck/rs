"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    // Replace with your form submission logic
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        setError("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form action="#">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <Input
              type="email"
              value={email}
              className="rounded-lg border sm:rounded-none sm:rounded-l-lg"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Button className="py-3 px-5 rounded-lg sm:rounded-none sm:rounded-r-lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Subscribe"}
            </Button>
          </div>
        </div>
      </form>

      {/* <form onSubmit={handleSubmit} className="flex flex-row items-center">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Successfully subscribed!</p>}

        <Button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </Button>
      </form> */}
    </div>
  );
};

export default NewsletterForm;
