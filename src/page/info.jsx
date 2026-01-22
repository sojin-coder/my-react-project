import React from "react";
import { Users, BookOpen, Award, Star, Target, Quote } from "lucide-react";

const stats = [
  {
    icon: <Users className="text-blue-600" size={24} />,
    value: "50K+",
    label: "Active Students",
    bgColor: "bg-blue-50",
  },
  {
    icon: <BookOpen className="text-purple-600" size={24} />,
    value: "100+",
    label: "Courses",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Award className="text-green-600" size={24} />,
    value: "7+ Years",
    label: "Experience",
    bgColor: "bg-green-50",
  },
  {
    icon: <Star className="text-orange-500" size={24} />,
    value: "4.9/5",
    label: "Student Rating",
    bgColor: "bg-orange-50",
  },
];

const testimonials = [
  {
    rating: 5,
    text: "The curriculum at ETEC is perfectly aligned with what employers are looking for. I landed a job as a developer just weeks after finishing the course.",
    name: "Graduate Student",
    role: "Software Engineer",
    avatar: "https://ccreadysites.cyberchimps.com/coffee-plaza/wp-content/uploads/sites/191/2022/05/reviewer-01.png",
  },
  {
    rating: 5,
    text: "The curriculum at ETEC is perfectly aligned with what employers are looking for. I landed a job as a developer just weeks after finishing the course.",
    name: "Graduate Student",
    role: "Software Engineer",
    avatar: "https://preview.uideck.com/items/cafe/assets/images/customer-2.jpg",
  },
  {
    rating: 5,
    text: "The curriculum at ETEC is perfectly aligned with what employers are looking for. I landed a job as a developer just weeks after finishing the course.",
    name: "Graduate Student",
    role: "Software Engineer",
    avatar: "https://preview.uideck.com/items/cafe/assets/images/customer-1.jpg",
  },
];

const Info = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero & Header */}
      <div className="text-center py-16 px-6 bg-white">
        <div className="bg-blue-50 px-4 py-1 rounded-full w-fit mx-auto mb-6 border border-blue-100">
          <p className="text-blue-700 text-sm font-bold uppercase tracking-wider">
            Established 2017
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight text-slate-900">
          Empowering the next generation of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            IT Professionals
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6 text-gray-600 leading-relaxed">
          ETEC Center provides industry-standard training to help students master
          practical technology skills and build successful careers.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all hover:shadow-lg active:scale-95">
            Browse Courses
          </button>
          <button className="px-10 py-4 bg-transparent text-slate-700 border-2 border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all active:scale-95">
            Our Story
          </button>
        </div>
      </div>

      <div className="bg-white h-48 w-full border-b border-gray-100"></div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              <div className={`${item.bgColor} p-4 rounded-xl mb-4`}>
                {item.icon}
              </div>
              <h2 className="text-3xl font-bold text-slate-800">{item.value}</h2>
              <p className="text-gray-500 font-medium mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mt-16">
        <div className="bg-gray-200/50 p-1 rounded-xl flex gap-2">
          {["Mission", "Vision", "Story", "Team"].map((tab) => (
            <button
              key={tab}
              className={`px-8 py-2 rounded-lg text-sm font-semibold transition-all ${
                tab === "Mission"
                  ? "bg-white text-blue-600 shadow-sm border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Mission Content */}
      <div className="max-w-5xl mx-auto px-6 mt-12 pb-10">
        <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-lg border border-gray-50 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Mission</h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-500 italic leading-relaxed font-light">
            "To democratize education by providing accessible, affordable, and
            high-quality learning experiences that empower individuals to
            achieve their personal and professional goals."
          </p>
        </div>
      </div>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <div className="absolute top-8 right-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                  <Quote size={48} />
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
