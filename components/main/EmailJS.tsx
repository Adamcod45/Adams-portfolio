"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function EmailForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleAdd = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleRemove = () => {
    setIsOpen(false);
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const serviceId = 'service_otiedei';
  const templateId = 'template_xnyqjdv';
  const publicKey = 'ThA8fEoyIMzi-uWT4';


  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Obatayo Adam',
    message:message,
  };                  

  const toastId = toast.loading('Sending message...');

  emailjs.send(serviceId,templateId,templateParams,publicKey)
  .then((res) => {
    toast.success('Message sent! I\'ll get back to you soon.', { id: toastId });
    setName('');
    setEmail('');
    setMessage('');
  })
  .catch((err) => {
    console.error("Errror sending email", err)
    toast.error('Something went wrong. Please try again.', { id: toastId });
  })

 };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Toaster />
      {!isOpen && (
        <button
          onClick={handleAdd}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] text-white shadow-[0_0_20px_#a48fff55] hover:-translate-y-0.5 hover:shadow-[0_0_28px_#a48fff88] transition duration-200"
          aria-label="Open contact form"
        >
          <Send className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="w-[340px] sm:w-[380px] rounded-2xl  bg-[#0d0125]/90 backdrop-blur-md overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#7042f84d] bg-[#150a30]/80 px-5 py-4">
            <p className="Welcome-text text-sm font-semibold">Contact me</p>

            <X
              onClick={handleRemove}
              className="text-[#b49bff] hover:text-white transition cursor-pointer"
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-5 py-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-[#b49bff]">
               Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={name}
                className="rounded-lg bg-[#150a30] border border-[#7042f84d] px-4 py-2.5 text-sm text-white placeholder:text-[#8a7cb8] outline-none focus:ring-2 focus:ring-[#a48fff] focus:border-[#a48fff] transition"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-[#b49bff]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                className="rounded-lg bg-[#150a30] border border-[#7042f84d] px-4 py-2.5 text-sm text-white placeholder:text-[#8a7cb8] outline-none focus:ring-2 focus:ring-[#a48fff] focus:border-[#a48fff] transition"
                  onChange={(e) =>setEmail(e.target.value)}
              />
            </div>

            

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs text-[#b49bff]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write your message here..."
                value={message}
                className="rounded-lg bg-[#150a30] border border-[#7042f84d] px-4 py-2.5 text-sm text-white placeholder:text-[#8a7cb8] outline-none focus:ring-2 focus:ring-[#a48fff] focus:border-[#a48fff] transition resize-none"
                  onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="button-primary mt-1 flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
}