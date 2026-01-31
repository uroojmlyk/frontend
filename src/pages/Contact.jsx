import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, User, Star, Sparkles, Zap, Award, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@learnhub.com",
      link: "mailto:support@learnhub.com",
      bgColor: "from-blue-600/30 to-cyan-500/30",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      bgColor: "from-purple-600/30 to-pink-500/30",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      link: "#",
      bgColor: "from-emerald-600/30 to-teal-500/30",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Live Support",
      link: "#",
      bgColor: "from-amber-600/30 to-orange-500/30",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ];

  const faqs = [
    {
      question: "How fast do you respond to inquiries?",
      answer: "We typically respond within 2-4 hours during business hours.",
      icon: Zap
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes, we provide customized enterprise packages for teams.",
      icon: Award
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee on all courses.",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Dark Wallpaper Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating Particles */}
          <div className="absolute w-4 h-4 rounded-full top-1/4 left-3/4 bg-blue-400/20 animate-bounce"></div>
          <div className="absolute w-3 h-3 delay-300 rounded-full top-1/2 right-1/3 bg-purple-400/20 animate-bounce"></div>
          <div className="absolute w-2 h-2 delay-700 rounded-full bottom-1/3 left-1/3 bg-cyan-400/20 animate-bounce"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-3 mb-10 border shadow-2xl backdrop-blur-xl bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl border-white/20 shadow-purple-500/20">
              <MessageSquare className="w-6 h-6 text-cyan-300 animate-pulse" />
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                Connect & Collaborate
              </span>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            
            <h1 className="mb-8 text-6xl font-bold leading-tight md:text-8xl">
              <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text">
                Let's Build
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
                Your Future Together
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto mb-12 text-2xl leading-relaxed text-gray-300">
              Have questions, ideas, or ready to start your learning journey? 
              Our team is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="flex items-center mb-8 text-3xl font-bold">
                <div className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-pulse"></div>
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="block group"
                  >
                    <div className={`p-6 backdrop-blur-xl ${info.bgColor} rounded-2xl border ${info.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md">
                          <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{info.title}</h3>
                          <p className="text-gray-400">{info.details}</p>
                        </div>
                        <div className="ml-auto transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                          <Send className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="flex items-center mb-6 text-2xl font-bold">
                  <div className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 animate-pulse"></div>
                  Frequently Asked
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-6 transition-all duration-300 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-white/10 hover:border-white/20">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-white/5">
                          <faq.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="mb-2 text-lg font-semibold text-white">{faq.question}</h4>
                          <p className="text-gray-400">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Global Presence */}
              <div className="p-6 mt-8 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <Globe className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Global Support</h4>
                    <p className="text-gray-400">Serving learners in 150+ countries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Contact Form */}
            <div>
              <h2 className="flex items-center mb-8 text-3xl font-bold">
                <div className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 animate-pulse"></div>
                Send Us A Message
              </h2>
              
              <div className="p-8 border shadow-2xl backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-white/10 shadow-blue-500/10">
                {isSuccess ? (
                  <div className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-white">Message Sent!</h3>
                    <p className="mb-6 text-xl text-gray-300">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-xl hover:shadow-cyan-500/30"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="group">
                      <label className="flex items-center mb-2 text-sm font-medium text-gray-300">
                        <User className="w-4 h-4 mr-2" />
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all duration-300 border bg-gray-900/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-md"
                          placeholder="John Doe"
                        />
                        <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
                          <User className="w-5 h-5 text-gray-400 transition-colors group-focus-within:text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="group">
                      <label className="flex items-center mb-2 text-sm font-medium text-gray-300">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all duration-300 border bg-gray-900/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-md"
                          placeholder="john@example.com"
                        />
                        <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
                          <Mail className="w-5 h-5 text-gray-400 transition-colors group-focus-within:text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="group">
                      <label className="flex items-center mb-2 text-sm font-medium text-gray-300">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all duration-300 border bg-gray-900/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-md"
                          placeholder="How can we help?"
                        />
                        <div className="absolute transform -translate-y-1/2 left-4 top-1/2">
                          <MessageSquare className="w-5 h-5 text-gray-400 transition-colors group-focus-within:text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="group">
                      <label className="flex items-center mb-2 text-sm font-medium text-gray-300">
                        <Send className="w-4 h-4 mr-2" />
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all duration-300 border resize-none bg-gray-900/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-md"
                          placeholder="Tell us about your inquiry..."
                        />
                        <div className="absolute left-4 top-4">
                          <Send className="w-5 h-5 text-gray-400 transition-colors group-focus-within:text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 text-lg font-bold text-white transition-all duration-300 rounded-xl flex items-center justify-center gap-3 ${
                        isSubmitting
                          ? 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-sm text-center text-gray-400">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                )}
              </div>
              
              {/* Response Time Card */}
              <div className="p-6 mt-8 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20">
                      <Clock className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Fast Response Time</h4>
                      <p className="text-sm text-gray-400">Average response: 2-4 hours</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 border bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border-green-500/30">
                    <span className="text-lg font-bold text-green-300">98%</span>
                    <span className="ml-2 text-sm text-gray-400">Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Support Banner */}
          <div className="p-8 mt-16 border backdrop-blur-xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 rounded-2xl border-white/10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg"></div>
                  <div className="relative p-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">24/7 Live Support</h3>
                  <p className="text-gray-300">Chat with our experts in real-time</p>
                </div>
              </div>
              <button className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:shadow-xl hover:shadow-blue-500/30">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;