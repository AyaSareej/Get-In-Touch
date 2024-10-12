import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TimeNow from "./TimeNow";

const App = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [scheduleEmail, setScheduleEmail] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (scheduleEmail) {
      const scheduledDateTime = new Date(`${scheduledDate}T${scheduledTime}`);
      const now = new Date();
      const delay = scheduledDateTime - now;

      if (delay > 0) {
        setTimeout(() => {
          emailjs
            .sendForm("service_ujklm7m", "template_4j43htf", form.current, {
              publicKey: "oX3eNzdoQ34gs6ihC",
            })
            .then(
              () => {
                setMessage("Your message was scheduled and sent successfully!");
                setIsVisible(true);
                setTimeout(() => {
                  setIsVisible(false);
                  setTimeout(() => setMessage(""), 300);
                }, 3000);
              },
              (error) => {
                setMessage("Failed to send your message. Please try again.");
                setIsVisible(true);
                setTimeout(() => {
                  setIsVisible(false);
                  setTimeout(() => setMessage(""), 300);
                }, 3000);
              }
            );
        }, delay);
      } else {
        setMessage("Scheduled time must be in the future.");
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => setMessage(""), 300);
        }, 3000);
      }
    } else {
      emailjs
        .sendForm("service_ujklm7m", "template_4j43htf", form.current, {
          publicKey: "oX3eNzdoQ34gs6ihC",
        })
        .then(
          () => {
            setMessage("Your message was sent successfully!");
            setIsVisible(true);
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(() => setMessage(""), 300);
            }, 3000);
          },
          (error) => {
            setMessage("Failed to send your message. Please try again.");
            setIsVisible(true);
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(() => setMessage(""), 300);
            }, 3000);
          }
        );
    }

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
      <div className="flex flex-col items-center z-10">
        <div className="mb-6 max-w-md w-full">
          <TimeNow />
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

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="scheduleEmail"
              checked={scheduleEmail}
              onChange={() => setScheduleEmail(!scheduleEmail)}
              className="mr-2"
            />
            <label htmlFor="scheduleEmail" className="text-gray-700">
              Schedule this email
            </label>
          </div>

          {scheduleEmail && (
            <div className="mb-4">
              <input
                type="date"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:border-green-400 transition duration-300 ease-in-out mb-2"
              />
              <input
                type="time"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:border-green-400 transition duration-300 ease-in-out"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded-lg p-4 font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>

      {message && (
        <div
          className={`fixed top-4 left-4 right-4 bg-green-200 border border-green-400 text-green-800 px-4 py-3 rounded-md shadow-lg text-center transition-all duration-500 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default App;
