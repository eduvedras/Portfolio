"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("../components/ContactForm"), {
	ssr: false,
});

function Contact() {
	return (
		<section className="w-screen flex flex-col" id="contact">
			<ContactForm />
		</section>
	);
}

export default Contact;
