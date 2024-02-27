"use server";

import {getErrorMessage, validateString} from "@/lib/utils";
import {Resend} from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/lib/firebase";

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

  //Save the Email and Message to Firebase Cloud

  const SaveToFirebase = async (email: string, message: string) => {
    await addDoc(collection(db, "contactInfo"), {
      email: email.trim(),
      message: message.trim(),
    });
  };

  let data;
  try {
    data = await resend.emails
      .send({
        from: "onboarding@resend.dev",
        to: "saqoo1005@gmail.com",
        subject: "PORTFOLIO MESSAGE",
        reply_to: senderEmail as string,
        text: message as string,
        react: React.createElement(ContactFormEmail, {
          message: message as string,
          senderEmail: senderEmail as string,
        }),
      })
      .then(() => {
        SaveToFirebase(senderEmail as string, message as string);
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
