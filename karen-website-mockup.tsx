import React from 'react';

const RetroWebsite = () => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Header with Navigation */}
      <header className="bg-amber-100 border-b-4 border-green-800 shadow-md">
        <div className="container mx-auto py-4 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-4xl font-bold text-green-800" style={{fontFamily: 'cursive'}}>Karen</h1>
              <span className="ml-2 px-3 py-1 bg-amber-200 text-green-800 rounded-full text-xs font-bold">EST. 1997</span>
            </div>
            <nav className="flex space-x-6">
              {["Home", "Our Story", "Products", "Benefits", "Testimonials", "Contact"].map(item => (
                <a key={item} href="#" className="text-green-800 hover:text-green-600 font-medium">
                  {item}
                </a>
              ))}
              <a href="#" className="flex items-center text-green-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="ml-1">Cart</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-amber-200 py-12 border-b-4 border-green-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-5xl font-bold text-green-800 mb-4" style={{fontFamily: 'cursive'}}>
                Want To Feel 25 Years Younger?
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-800 transform rotate-1">
                <h3 className="text-2xl font-bold text-green-800 mb-4">The Time Machine Discovery</h3>
                <p className="text-lg mb-6">
                  Travel back in time with Karen Phytoplankton - Mother Nature's original superfood that delivers pure source nutrition directly to your cells, no digestion required!
                </p>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-green-800 text-white rounded-full hover:bg-green-700 transform transition hover:scale-105">
                    Try Risk Free
                  </button>
                  <button className="px-6 py-3 bg-amber-400 text-green-800 rounded-full hover:bg-amber-300 transform transition hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white rounded-full shadow-lg p-6 transform rotate-6 border-4 border-green-800">
                  <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/api/placeholder/400/400" alt="Karen Phytoplankton Product" className="object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-300 text-green-800 rounded-full py-2 px-4 font-bold transform rotate-12 border-2 border-green-800">
                  Feel the Difference!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reset Your Foundation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12" style={{fontFamily: 'cursive'}}>
            Reset Your Foundation
          </h2>
          <div className="max-w-3xl mx-auto bg-amber-100 p-8 rounded-lg border-2 border-green-800 transform -rotate-1 shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6">The Wrong Foundation = Sub Par Results</h3>
            <ul className="space-y-4">
              {[
                "If you have the wrong grip you will never be a good golfer",
                "If you don't tune your instrument, the music will always be off",
                "If your body is missing nutrition, you will always have issues"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 bg-green-800 rounded-full flex items-center justify-center text-white font-bold mr-3">✓</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <span className="inline-block px-4 py-2 bg-amber-300 text-green-800 font-bold rounded-full transform rotate-2 border border-green-800">
                Here's Some Exciting News....For a change
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-green-50 border-t-4 border-b-4 border-green-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-6" style={{fontFamily: 'cursive'}}>
            The Time Machine Discovery
          </h2>
          <p className="text-xl text-center mb-12">But first....some questions. See how many answers you know</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "What is the Base Food on the planet?",
              "What is the smallest plant life on Earth?",
              "What is the most abundant plant life on Earth?",
              "What does NASA call The Most Important Plant Life?",
              "What food supports the ENTIRE OCEAN that includes whales?",
              "What provides Earth the majority of oxygen?",
              "What is the origin source of LIFE, FOOD, & NUTRITION?"
            ].map((question, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-green-800 transform hover:scale-105 transition">
                <h3 className="text-xl font-bold text-green-800 mb-3">Question {index + 1}</h3>
                <p className="text-lg mb-4">{question}</p>
                <div className="h-10 bg-amber-100 rounded-md border border-amber-300"></div>
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto mt-12 bg-amber-200 p-8 rounded-lg border-2 border-green-800 text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-6">The answer is....</h3>
            <div className="inline-block bg-green-800 text-white text-3xl font-bold py-3 px-8 rounded-lg transform rotate-1">
              Marine Phytoplankton
            </div>
            <p className="mt-6 text-lg">
              A Canadian company discovered it for human nutrition, and perfected its growing.
            </p>
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-amber-100 p-8 rounded-lg border-2 border-green-800 transform rotate-1 shadow-lg">
                <h3 className="text-3xl font-bold text-green-800 mb-6" style={{fontFamily: 'cursive'}}>What Is Karen Phytoplankton?</h3>
                <ul className="space-y-4">
                  {[
                    "It's a single cell plant 1/3 the size of a blood cell",
                    "Inside the plant is pure source nutrition that absorbs directly into your cells WITHOUT DIGESTION",
                    "Military Grade Ocean Water Filtration, No pesticides, no fertilizer, FDA approved facility",
                    "Already market tested with arguably the highest quality reviews in history"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-green-800 rounded-full flex items-center justify-center text-white font-bold mr-3">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg italic border-t-2 border-amber-300 pt-4">
                  "If your mom knew.....this is the supplement she would have given you instead of Cod Liver Oil"
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img src="/api/placeholder/400/400" alt="Karen Product" className="rounded-lg shadow-lg border-4 border-amber-200" />
                <div className="absolute -top-6 -right-6 bg-amber-300 text-green-800 rounded-full h-24 w-24 flex items-center justify-center font-bold transform rotate-12 border-2 border-green-800">
                  <div className="text-center">
                    <div className="text-xl">Only</div>
                    <div className="text-2xl">$2</div>
                    <div className="text-sm">per day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Take It */}
      <section className="py-16 bg-amber-100 border-t-4 border-green-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12" style={{fontFamily: 'cursive'}}>
            How To Take It
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border-2 border-green-800 shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-amber-50 p-4 rounded-full w-48 h-48 flex items-center justify-center border-4 border-green-800">
                    <img src="/api/placeholder/200/200" alt="Green powder" className="rounded-full" />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-xl mb-4">
                    It's a vibrant green powder. Mix with water or your favourite COLD beverage.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Each scoop/serving can feed over 90,000,000,000 of your cells",
                      "Direct nourishment for your mitochondria which is the engine of your body",
                      "Fueling your mitochondria with pure source nutrition is like turning on a generator during a power outage"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 bg-green-800 rounded-full flex items-center justify-center text-white font-bold mr-3">✓</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-lg font-bold">
                    If you are living life like you have a few blown circuit breakers.....Congratulations! You are in the right place.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-xl mb-6">
                The 25 year Time Machine metaphor is not from us. This is the over arching comment from our customer community!!
              </p>
              <div className="inline-block bg-green-800 text-white text-xl font-bold py-3 px-6 rounded-lg transform rotate-1">
                More good news! It's free if you don't feel a transformation happening because we fully back it.
              </div>
              <p className="mt-4 text-lg font-bold">
                We can do this because only 0.81% take us up on this offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12" style={{fontFamily: 'cursive'}}>
            Start Your Time Machine Journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "1 unit to try",
                price: "$90",
                features: ["30-day supply", "Risk-free guarantee", "Free shipping"],
                popular: false
              },
              {
                title: "3 month supply",
                price: "$195",
                features: ["90-day supply", "Save $75", "Risk-free guarantee", "Free shipping"],
                popular: true
              },
              {
                title: "3 month subscription",
                price: "$180",
                features: ["90-day supply", "Save $90", "Cancel anytime", "Free shipping"],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-lg overflow-hidden ${plan.popular ? 'transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-amber-400 text-green-800 py-1 px-4 font-bold">
                    BEST VALUE
                  </div>
                )}
                <div className={`p-6 border-2 ${plan.popular ? 'border-green-800 bg-amber-50' : 'border-amber-200 bg-white'} rounded-lg shadow-lg`}>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-green-800 mb-6">{plan.price}</div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-800 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-full font-bold ${plan.popular ? 'bg-green-800 text-white' : 'bg-amber-300 text-green-800 border border-green-800'}`}>
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-amber-100 rounded-lg border-2 border-green-800">
            <p className="text-lg mb-4">
              Thinking of passing on this? No problem, just keep in mind.
            </p>
            <p className="text-lg mb-4">
              We are a small batch provider and we are the only one with FDA certification, and market history. Again, we discovered this.
            </p>
            <p className="text-lg font-bold">
              This is NOT A COMMODITY. We have enough for roughly 12,000 people. We will need more time to ramp up once this is sold out.
            </p>
            <div className="mt-6 text-center">
              <button className="px-8 py-3 bg-green-800 text-white rounded-full font-bold transform hover:scale-105 transition">
                Try Risk Free Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Named Karen */}
      <section className="py-16 bg-amber-50 border-t-4 border-green-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-6" style={{fontFamily: 'cursive'}}>
            Why is it named Karen?
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border-2 border-green-800 shadow-lg">
            <p className="text-lg mb-4">
              Karen is the original Phytoplankton brand. Originally named in honor of a nurse from Maple Ridge, BC Canada who unnecessarily suffered and left us at 46.
            </p>
            <p className="text-lg mb-4">
              Our goal is to change this trajectory of constant health issues for the populace.
            </p>
            <p className="text-lg">
              Yes, the meme came out, but of course back 25 years ago we all knew a Karen who was cool. Again, let's go back in time when things weren't so negative.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'cursive'}}>Karen</h3>
              <p className="max-w-md">
                Mother Nature's Original Time Machine. Pure source nutrition directly to your cells.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="font-bold text-xl mb-4">Shop</h4>
                <ul className="space-y-2">
                  {["Products", "Bundles", "Subscribe", "Gift Cards"].map(item => (
                    <li key={item}><a href="#" className="hover:text-amber-200">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4">Learn</h4>
                <ul className="space-y-2">
                  {["Our Story", "Science", "FAQs", "Blog"].map(item => (
                    <li key={item}><a href="#" className="hover:text-amber-200">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4">Connect</h4>
                <ul className="space-y-2">
                  {["Contact Us", "Support", "Wholesale", "Affiliates"].map(item => (
                    <li key={item}><a href="#" className="hover:text-amber-200">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Karen Phytoplankton. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Shipping", "Returns"].map(item => (
                <a key={item} href="#" className="text-sm hover:text-amber-200">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RetroWebsite;
