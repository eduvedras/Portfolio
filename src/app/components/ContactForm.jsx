"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function ContactForm() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_m03alnj", "template_6hunc8m", form.current, {
				publicKey: "JRE2bb_Xpmc4Pvwzu",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					e.target.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<div className="flex flex-col border border-teal-500 w-1/2 m-auto py-8 rounded-xl shadow-teal-800 shadow-lg gap-6">
			<h1 className="text-3xl text-gray-100 m-auto">
				Write me a message!
			</h1>
			<form
				ref={form}
				className="flex flex-col m-auto gap-10 w-full text-gray-300 text-xl px-10"
				onSubmit={sendEmail}
			>
				<input
					className="bg-black border border-gray-500 p-3 rounded-xl hover:border-teal-400 focus:outline-none focus:border-teal-400"
					type="text"
					name="user_name"
					placeholder="Name"
				/>
				<input
					className="bg-black border border-gray-500 p-3 rounded-xl hover:border-teal-400 focus:outline-none focus:border-teal-400"
					type="email"
					name="user_email"
					placeholder="Email"
				/>
				<textarea
					className="h-40 bg-black border border-gray-500 p-3 rounded-xl hover:border-teal-400 focus:outline-none focus:border-teal-400"
					name="message"
					placeholder="Message"
				/>
				<input
					className="cursor-pointer bg-teal-800 hover:bg-teal-600 p-3 rounded-xl"
					type="submit"
					value="Send"
				/>
			</form>
		</div>
	);
}
