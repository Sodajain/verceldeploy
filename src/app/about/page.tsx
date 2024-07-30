"use client";
import { Badge } from "@/components/ui/badge";
import { FaCity, FaGlobe, FaHandshake, FaHeart, FaHome, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';


export default function About() {
  
  const handleFindFlat = () => {
    window.open("https://docs.google.com/forms/d/1g4fQVkfGKrNvYk2ivsDyPSmJ9UGxbnZz-s4bgDdUkE4/edit?ts=66a71a44", "_blank");
};
  return (
    <main className="px-8 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Welcome to Habiiito
        </h1>
        <Badge variant={"success"} className="text-lg font-semibold mt-4 px-4 py-2 transition-all duration-300 transform hover:scale-110">
          Revolutionizing Gen Z Living in Gurgaon
        </Badge>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:shadow-xl">
        <p className="text-gray-700 text-xl leading-relaxed">
          Hey there, future Habiiito resident! 👋 We're not your average real estate platform - we're your partners in finding the perfect living space that vibes with your Gen Z soul. At Habiiito, we believe finding a flatmate is like finding your favorite playlist, and your home should be the stage where you perform your life's best hits. Let's turn this house-hunting journey into an epic adventure!
        </p>
      </div>

      {/* Our Journey */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Habiiito Saga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaLightbulb, title: "The Spark", content: "Born from the bright minds of architecture grads, Habiiito ignited when we realized finding the perfect flatmate shouldn't be harder than acing finals." },
            { icon: FaRocket, title: "The Launch", content: "We blasted off with a mission: create a platform that gets your vibe and matches you with living spaces that feel like they were designed just for you." },
            { icon: FaHeart, title: "The Purpose", content: "Our heartbeat? Creating happy homes where you can grow, thrive, and craft memories that'll make your Instagram followers jealous." },
            { icon: FaHandshake, title: "The Promise", content: "We handle the boring stuff - listings, screenings, management - so you can focus on the exciting part: finding your dream home and dream flatmates." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <item.icon className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Why Habiiito Rocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: FaUsers, title: "Gen Z Experts", content: "We speak your language, understand your needs, and curate spaces that match your lifestyle." },
            { icon: FaHome, title: "More Than Houses", content: "We're creating communities where you can be yourself, make lifelong friends, and live your best life." },
            { icon: FaCity, title: "Gurgaon Gurus", content: "We know Gurgaon like the back of our hand, helping you find the perfect neighborhood that suits your vibe." },
            { icon: FaGlobe, title: "Going Global", content: "Starting in Gurgaon, but we're dreaming big. Soon, we'll be bringing the Habiiito magic to cities worldwide!" }
          ].map((item, index) => (
            <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <item.icon className="text-4xl text-primary mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Find Your Habiiito Haven?</h2>
        <button onClick={handleFindFlat} className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Start Your Journey
        </button>
      </div>

    </main>
  );
}