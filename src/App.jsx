import { useRef } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ujklm7m", "template_4j43htf", form.current, {
        publicKey: "oX3eNzdoQ34gs6ihC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-6 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
        {/* Circles */}
        <div className="absolute bg-green-400 opacity-30 rounded-full w-[250px] h-[250px] top-[10%] left-[12%] animate-flow"></div>
        <div className="absolute bg-green-400 opacity-30 rounded-full w-[200px] h-[200px] top-[10%] left-[85%] animate-flow"></div>
        {/* Triangles */}
        <div className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-green-500 opacity-30 top-[50%] left-[70%] animate-spin-slow"></div>
        <div className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-green-500 opacity-30 top-[85%] left-[3%] animate-spin-slow"></div>
        {/* Cubes */}
        <div className="absolute bg-green-300 opacity-30 w-[80px] h-[80px] top-[65%] left-[15%] rotate-[45deg] animate-spin-slow"></div>
        <div className="absolute bg-green-300 opacity-70 w-[80px] h-[80px] top-[80%] left-[85%] rotate-[45deg] animate-spin-slow"></div>
      </div>

      <form
        onSubmit={sendEmail}
        ref={form}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full z-10"
      >
        <h1 className="text-center font-bold text-4xl text-green-600 mb-6">
          Get in Touch
        </h1>
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:border-green-400 transition duration-300 ease-in-out mb-4"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:border-green-400 transition duration-300 ease-in-out mb-4"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:border-green-400 transition duration-300 ease-in-out mb-4"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 text-white rounded-lg p-4 font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default App;
