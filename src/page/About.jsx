// src/pages/About.jsx
import React from "react";
import Timeline from "../components/Timeline";
import {
  Eye,
  Target,
  Heart,
  ShieldCheck,
  UserRound,
  Globe,
  Quote,
  Star,
} from "lucide-react";

function About() {
  return (
    <div className="mt-1">
      <div className="p-8 border border-gray-400 bg-gray-200 mb-3 w-[90%] m-auto rounded-xl ">
        <div className="flex justify-between gap-10 p-8">
          <div className="bg-gray-300 p-10 rounded-2xl shadow-2xl shadow-gray-700">
            <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center  mb-4">
              {/* <Clock4 /> */}
              <Target />
            </div>
            <h1 className="text-4xl font-bold mt-3 mb-5">Our Mission</h1>
            <p className="text-lg p-2">
              To democratize education by providing accessible, affordable, and
              high-quality learning experiences that empower individuals to
              achieve their personal and professional goals. We believe everyone
              deserves the opportunity to learn and grow, regardless of their
              background or location.
            </p>
          </div>
          <div className="bg-gray-400 p-10 rounded-2xl shadow-2xl shadow-gray-700">
            <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center  mb-4">
              {/* <Clock4 /> */}
              <Eye />
            </div>
            <h1 className="text-4xl font-bold mt-3 mb-5">Our Vision</h1>
            <p className="text-lg p-2">
              To become the world's most trusted online learning platform, where
              millions of learners connect with expert instructors to master new
              skills, advance their careers, and transform their lives. We
              envision a future where quality education knows no boundaries.
            </p>
          </div>
        </div>
        {/* ----Our Story--- */}
        <div className="mt-40 mb-20">
          <h1 className="text-center font-bold text-4xl">Our Story</h1>
          <div className="w-[80%] m-auto ">
            <p className="mt-10 text-xl">
              ETEC Center is a leading IT training institute established to
              provide high-quality education in web development, mobile
              applications, and modern technology skills. Since its founding in
              2017, the center has helped students and professionals gain
              practical knowledge and hands-on experience in the IT industry.
              Under the leadership of Director Heng Pheakna and Vice Director
              Kung Norasmey, ETEC Center focuses on delivering excellent
              training while maintaining advanced IT systems. The team,
              including skilled developers like Srin Nalen, ensures modern,
              functional, and user-friendly solutions for students, staff, and
              visitors. © 2025 ETEC Center
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Timeline />
      </div>
      <div className="mt-30 bg-gray-50 p-2">
        <h1 className="text-center text-4xl font-bold mt-20">
          Our Core Values
        </h1>
        <p className=" text-center w-[50%] pt-10 m-auto text-xl ">
          {" "}
          These principles guide everything we do and shape our commitment to
          our students.
        </p>
      </div>
      <div className="mt-20 w-[80%] m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-30">
          <div className="text-center shadow-xl  rounded-2xl p-5 hover:shadow-2xl shadow-gray-700">
            <div className=" w-16 h-16  text-blue-700 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
              {/* <UserRound /> */}
              <Heart size={40} />
            </div>
            <h3 className="font-bold text-xl mb-2"> Passion for Learning</h3>
            <p className=" text-gray-600 text-lg mt-5 ">
              {" "}
              We believe education transforms lives and opens doors to endless
              possibilities.
            </p>
          </div>
          <div className="text-center shadow-xl  rounded-2xl p-5 hover:shadow-2xl shadow-gray-700">
            <div className=" w-16 h-16 text-blue-700 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
              {/* <Clock4 /> */}
              <UserRound size={40} />
            </div>
            <h3 className="font-bold text-xl mb-2"> Student-Centered</h3>
            <p className=" text-gray-600 text-lg mt-5">
              {" "}
              Every decision we make puts our students first, ensuring the best
              learning experience.
            </p>
          </div>
          <div className="text-center shadow-xl  rounded-2xl p-5 hover:shadow-2xl shadow-gray-700">
            <div className=" w-16 h-16 text-blue-700 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
              <ShieldCheck size={40} />
            </div>
            <h3 className="font-bold text-xl mb-2"> Quality Excellence</h3>
            <p className=" text-gray-600 text-lg mt-5">
              {" "}
              We maintain the highest standards in course content, instruction,
              and support.
            </p>
          </div>
          <div className="text-center shadow-xl rounded-2xl p-5 hover:shadow-2xl shadow-gray-700">
            <div className=" w-16 h-16 text-blue-700 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
              {/* <Headset /> */}
              <Globe size={40} />
            </div>
            <h3 className="font-bold text-xl mb-2">Global Community</h3>
            <p className=" text-gray-600 text-lg mt-5">
              {" "}
              Building a diverse, inclusive community of learners from around
              the world.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-30 bg-gray-50 p-2">
        <h1 className="text-center text-4xl font-bold mt-20">Meet Our Team</h1>
        <p className=" text-center w-[50%] text-gray-500 pt-5 m-auto text-xl mb-15 ">
          {" "}
          Passionate professionals dedicated to transforming online education.
        </p>
      </div>
      <div className="mt-15  w-[80%] m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="h-80 flex items-center justify-center w-full">
              <img
                className="w-full"
                src="https://etec-system.42web.io/assets/lokru.png"
                alt=""
              />
            </div>
            <div className="p-6 text-center mt-10 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {" "}
                HENG PHEAKNA
              </h3>
              <p className="text-blue-600 font-semibold mb-3"> Director</p>
              <p className="text-gray-600 text-sm">
                {" "}
                15+ years in education technology
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="h-80 flex items-center justify-center w-full">
              <img
                className="w-full"
                src="https://etec-system.42web.io/assets/mimg.png"
                alt=""
              />
            </div>
            <div className="p-6 text-center mt-10 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {" "}
                Kung Norasmey
              </h3>
              <p className="text-blue-600 font-semibold mb-3"> Vice Director</p>
              <p className="text-gray-600 text-sm">
                {" "}
                Former software architect at tech giants
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="h-80 flex items-center justify-center w-full">
              <img
                className="w-full"
                src="https://etec-system.42web.io/assets/nalen.png"
                alt=""
              />
            </div>
            <div className="p-6 text-center mt-10 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {" "}
                Srin Nalen
              </h3>
              <p className="text-blue-600 font-semibold mb-3">Web Developer</p>
              <p className="text-gray-600 text-sm">
                {" "}
                Former software architect at tech giants
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="h-80 flex items-center justify-center w-full">
              <img
                className="w-full"
                src="https://etec-elearning.vercel.app/assets/dev-darith-DghgE6Pg.jpg"
                alt=""
              />
            </div>
            <div className="p-6 text-center mt-10 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {" "}
                Ven ChanDarith
              </h3>
              <p className="text-blue-600 font-semibold mb-3">Web Developer</p>
              <p className="text-gray-600 text-sm">
                {" "}
                Expert in digital marketing strategy Former software architect
                at tech giants
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 mt-10 rounded-2xl">
          <div className="p-5">
            <h1 className="text-center font-bold text-4xl text-gray-700 mt-5">
              What Our Students Say
            </h1>
            <p className="text-center p-3 text-lg mt-3 text-gray-600">
              Real feedback from real students who transformed their careers
              with us.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 p-4">
            {/* ========Card1============ */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden p-5">
              <div className="bg-white p-8 rounded-xl  text-blue-800">
                <Quote size={50} />
              </div>

              <p className="text-gray-600 mb-6 text-lg italic">
                {" "}
                LearnHub really kickstarted my career! The courses are clear,
                practical, and the instructors actually care about your growth.
                Couldn't recommend it more!
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">
                  <img
                    className="w-24 h-24  "
                    src="https://i.pinimg.com/736x/60/a1/71/60a1719d559469dbb6bfa1b6d0890e5e.jpg"
                    alt=""
                  />
                </div>

                <div className="">
                  <div className="font-bold text-gray-900"> Alex Thompson</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Software Developer
                  </div>
                </div>
              </div>
              <div className=" flex space-x-1 mt-4 ">
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
              </div>
            </div>
            {/* ========Card1============ */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden p-5">
              <div className="bg-white p-8 rounded-xl  text-blue-800">
                <Quote size={50} />
              </div>

              <p className="text-gray-600 mb-6 text-lg italic">
                {" "}
                Taking courses here was hands-down the best decision for my
                career. The content is engaging, and the support team feels like
                part of the journey.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">
                  <img
                    className="w-24 h-24  "
                    src="https://i.pinimg.com/736x/c4/d4/af/c4d4afa5d0bcdb35110c71d5adb7a8d7.jpg"
                    alt=""
                  />
                </div>

                <div className="">
                  <div className="font-bold text-gray-900"> Maria Garcia</div>
                  <div className="text-sm text-gray-600"> UX Designer</div>
                </div>
              </div>
              <div className=" flex space-x-1 mt-4">
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
              </div>
            </div>
            {/* ========Card1============ */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden p-5">
              <div className="bg-white p-8 rounded-xl  text-blue-800">
                <Quote size={50} />
              </div>

              <p className="text-gray-600 mb-6 text-lg italic">
                {" "}
                I love that I can learn at my own pace. The platform is
                intuitive, the lessons are practical, and I've already started
                applying what I learned at work!
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">
                  <img
                    className="w-24 h-24  "
                    src="https://i.pinimg.com/1200x/55/06/62/55066253d0d056c690cfb49f4f91ff82.jpg"
                    alt=""
                  />
                </div>

                <div className="">
                  <div className="font-bold text-gray-900"> James Wilson</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Marketing Manager
                  </div>
                </div>
              </div>
              <div className=" flex space-x-1 mt-4">
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
                <Star className="text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-20">
          <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="font-bold text-5xl text-center p-4 text-white ">
                Join Our Growing Community
              </h1>
              <p className="text-center text-xl mt-3 mb-10 text-white">
                Start your learning journey today and become part of something
                amazing.
              </p>
              <button className=" px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                {" "}
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
