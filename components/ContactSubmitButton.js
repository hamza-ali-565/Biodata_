"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactSubmitButton() {
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    // 1. Grab form data securely using DOM IDs (since the main form is a Server Component)
    const fullName = document.getElementById("fullName")?.value?.trim();
    const email = document.getElementById("email")?.value?.trim();
    const subject = document.getElementById("subject")?.value?.trim();
    const message = document.getElementById("message")?.value?.trim();

    const inputs = ["fullName", "email", "subject", "message"];

    // Reset visual error state
    inputs.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.borderColor = "var(--border-white-10, rgba(255,255,255,0.1))";
    });

    // 2. Validate empty fields
    let hasError = false;
    if (!fullName) { document.getElementById("fullName").style.borderColor = "#f43f5e"; hasError = true; }
    if (!email) { document.getElementById("email").style.borderColor = "#f43f5e"; hasError = true; }
    if (!subject) { document.getElementById("subject").style.borderColor = "#f43f5e"; hasError = true; }
    if (!message) { document.getElementById("message").style.borderColor = "#f43f5e"; hasError = true; }

    if (hasError) {
      setStatus("error");
      setErrorMsg("Please fill all required fields.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    // 3. Email formatting validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email").style.borderColor = "#f43f5e";
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    // 4. Processing State
    setStatus("loading");

    // Simulate short network delay for smooth UI transition
    setTimeout(() => {
      setStatus("success");

      // 5. Build Mailto link and Trigger Client
      const mailtoSubject = encodeURIComponent(`Contact Form: ${subject} from ${fullName}`);
      const mailtoBody = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:marriagebiodatahub@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Reset form visually
      inputs.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });

      // Clear success message after 5s
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  return (
    <div className="w-full mt-2 flex flex-col items-center">
      
      {/* Toast/Message Feedback Area */}
      {status === "error" && (
        <div className="mb-4 flex w-full items-center gap-2 rounded-lg bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-400 border border-rose-500/20 transition-all">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {status === "success" && (
        <div className="mb-4 flex w-full items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400 border border-emerald-500/20 transition-all">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>Your response has been submitted successfully! Redirecting via your email client...</span>
        </div>
      )}

      <button
        type="submit"
        onClick={handleClick}
        disabled={status === "loading" || status === "success"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-rose-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-brand-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Verifying...
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle2 className="h-4 w-4" />
            Redirecting...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </div>
  );
}
