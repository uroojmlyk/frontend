 import { Users, Award, Globe, Heart, Target, Sparkles, HeartHandshake, BookOpen, Zap, TrendingUp, Lightbulb, Shield, Users as UsersIcon, Rocket, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Former Google Lead, passionate about accessible education",
      social: ["twitter", "linkedin", "github"],
      color: "from-blue-500 to-cyan-500"
    },
  {
  name: "Sarah Chen",
  role: "Head of Education",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  bio: "15+ years in EdTech, curriculum design expert",
  social: ["twitter", "linkedin"],
  color: "from-purple-500 to-pink-500"
},
    {
      name: "Marcus Rivera",
      role: "Lead Instructor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Full-stack developer with 10+ years teaching experience",
      social: ["twitter", "linkedin", "github"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Students", color: "from-blue-600 to-cyan-500", bgColor: "bg-gradient-to-br from-blue-900/40 to-blue-800/20" },
    { icon: Award, value: "200+", label: "Premium Courses", color: "from-purple-600 to-pink-500", bgColor: "bg-gradient-to-br from-purple-900/40 to-pink-800/20" },
    { icon: Globe, value: "150+", label: "Countries", color: "from-green-600 to-emerald-500", bgColor: "bg-gradient-to-br from-emerald-900/40 to-teal-800/20" },
    { icon: Star, value: "98%", label: "Satisfaction Rate", color: "from-yellow-600 to-amber-500", bgColor: "bg-gradient-to-br from-amber-900/40 to-orange-800/20" }
  ];

  const values = [
    { icon: Target, title: "Our Mission", desc: "Democratize quality education for everyone, everywhere", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, title: "Our Vision", desc: "Become the world's #1 platform for skill transformation", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Our Promise", desc: "Excellence, integrity, and innovation in every course", color: "from-emerald-500 to-teal-500" },
    { icon: Lightbulb, title: "Innovation", desc: "Pioneering new learning methodologies since 2020", color: "from-amber-500 to-orange-500" }
  ];

  const milestones = [
    { year: "2020", title: "Founded", desc: "Started with a vision to democratize education" },
    { year: "2021", title: "10K Students", desc: "Reached first major milestone with 10,000 learners" },
    { year: "2022", title: "Global Expansion", desc: "Expanded to 100+ countries worldwide" },
    { year: "2023", title: "AI Integration", desc: "Launched AI-powered learning assistants" },
    { year: "2024", title: "Industry Leader", desc: "Recognized as #1 learning platform" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Premium Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Dark Wallpaper Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-3 mb-10 border shadow-2xl backdrop-blur-xl bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl border-white/20 shadow-purple-500/20">
              <BookOpen className="w-6 h-6 text-cyan-300 animate-pulse" />
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                Our Journey & Vision
              </span>
              <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
            </div>
            
            <h1 className="mb-8 text-6xl font-bold leading-tight md:text-8xl">
              <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text">
                Beyond Education
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
                We Transform Lives
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto mb-12 text-2xl leading-relaxed text-gray-300">
              We're not just teaching skills; we're building futures. Join thousands who have 
              transformed their careers through our revolutionary approach to learning.
            </p>
            
            {/* Quick Stats */}
            <div className="grid max-w-2xl grid-cols-2 gap-6 mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className={`p-6 backdrop-blur-xl ${stat.bgColor} rounded-2xl border ${stat.color.replace('from-', 'border-').replace(' to-', '/30')} shadow-xl`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-lg text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 border rounded-full bg-white/5 backdrop-blur-md border-white/10">
                  <Sparkles className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold text-gray-300">Our Genesis</span>
                </div>
                
                <h2 className="mb-8 text-5xl font-bold leading-tight">
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                    From Vision to
                  </span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
                    Global Impact
                  </span>
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                  <p>
                    Founded in 2020 with a revolutionary idea: education should be accessible, 
                    engaging, and transformative. We started with a single course and a bold vision.
                  </p>
                  <p>
                    Today, we're a global learning ecosystem serving professionals across 150+ countries. 
                    Our platform has evolved from simple courses to complete career transformation journeys.
                  </p>
                  <p>
                    Every lesson, every course, every interaction is designed with one goal in mind: 
                    to empower individuals to reach their full potential and transform their careers.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="p-8 border bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl border-white/10">
                  {/* Sarah Chen की image यहाँ जोड़ी गई है */}
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
                    alt="Sarah Chen - Head of Education"
                    className="w-full h-auto shadow-2xl rounded-2xl"
                  />
                  <div className="absolute w-3/4 p-6 border shadow-2xl -bottom-6 -right-6 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-xl rounded-2xl border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Exponential Growth</h4>
                        <p className="text-sm text-gray-400">10x growth in 4 years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                  The Pillars of Our
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text">
                  Excellence
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-400">
                The principles that guide every decision, every course, and every interaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="h-full p-8 transition-all duration-500 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border-white/10 hover:border-white/20 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-white">{value.title}</h3>
                    <p className="leading-relaxed text-gray-400">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-16 text-5xl font-bold text-center">
              <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                Our Journey Through
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
                The Years
              </span>
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-12 lg:text-right' : 'lg:pl-1/2 lg:pr-12'}`}>
                  <div className={`p-8 backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="absolute w-4 h-4 transform -translate-y-1/2 border rounded-full shadow-lg top-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 border-white/20 -left-2 lg:left-1/2 lg:-translate-x-1/2"></div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="px-4 py-2 border bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-xl border-blue-500/30">
                        <span className="text-2xl font-bold text-white">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-5xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                  Meet The Visionaries
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text">
                  Behind The Mission
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-400">
                The passionate leaders driving innovation and excellence in education
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {team.map((member, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:opacity-100"></div>
                  
                  <div className="relative p-8 transition-all duration-500 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10 hover:border-white/20 group-hover:-translate-y-2">
                    <div className="relative mb-8">
                      <div className="w-32 h-32 mx-auto overflow-hidden border-4 shadow-2xl rounded-2xl border-white/10">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 text-sm font-bold text-white rounded-full bg-gradient-to-br ${member.color} shadow-lg`}>
                        {member.role}
                      </div>
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-bold text-center text-white">{member.name}</h3>
                    <p className="mb-6 leading-relaxed text-center text-gray-400">{member.bio}</p>
                    
                    <div className="flex justify-center gap-3">
                      {member.social.map((platform, idx) => (
                        <button key={idx} className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110">
                          <span className="text-lg font-semibold">
                            {platform === 'twitter' ? '𝕏' : platform === 'linkedin' ? 'in' : '{}'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-3 mb-10 border shadow-2xl backdrop-blur-xl bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl border-white/20 shadow-purple-500/20">
              <HeartHandshake className="w-6 h-6 text-cyan-300" />
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                Join The Learning Revolution
              </span>
              <Rocket className="w-6 h-6 text-yellow-300" />
            </div>
            
            <h2 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                Ready to Transform
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text">
                Your Future?
              </span>
            </h2>
            
            <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300">
              Be part of a movement that's redefining education. Start your transformation journey today.
            </p>
            
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <button className="px-12 py-4 text-lg font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1">
                Start Learning Free
              </button>
              <button className="px-12 py-4 text-lg font-bold text-white transition-all duration-300 border-2 border-white/20 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-white/40">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;    





