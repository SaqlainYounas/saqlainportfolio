"use server";

import {getErrorMessage, validateString} from "@/lib/utils";
import {Resend} from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server"; // this is a server only function

  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "saqoo1005@gmail.com",
      subject: "PORTFOLIO MESSAGE",
      reply_to: senderEmail as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
