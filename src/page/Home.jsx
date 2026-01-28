import React from "react";
import { Link } from "react-router-dom";

// import { Star, UserRound, Clock4, ShieldCheck, Headset } from 'lucide-react';
import { Star ,UserRound ,Clock4,ShieldCheck,Award   } from 'lucide-react';


// src/pages/Home.jsx
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    category: "Development",
    title: "Web Development Masterclass",
    instructor: "John Doe",
    rating: 4.8,
    reviews: 12500,
    price: 49.99,
    image: "https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg",
  },
  {
    id: 2,
    category: "Data Science",
    title: "Python for Data Science",
    instructor: "Jane Smith",
    rating: 4.9,
    reviews: 18200,
    price: 59.99,
    image: "https://img-c.udemycdn.com/course/480x270/1754098_e0df_3.jpg",
  },
  {
    id: 3,
    category: "Design",
    title: "UI / UX Design Essentials",
    instructor: "Mike Johnson",
    rating: 4.7,
    reviews: 9800,
    price: 44.99,
    image: "https://img-c.udemycdn.com/course/480x270/3227583_5e75_6.jpg",
  },
  {
    id: 4,
    category: "Developement",
    title: "React JS Complete Guide",
    instructor: "Emma Wilson",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
  },
  {
    id: 5,
    category: "Sarah Smith",
    title: "Laravel From Scratch",
    instructor: "Sarah Smith",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/756150_c033_4.jpg",
  },
  {
    id: 6,
    category: "Design",
    title: "UXUI Designer",
    instructor: "Mike Johnson",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/3227583_5e75_6.jpg",
  },
  {
    id: 7,
    category: "Development",
    title: "JavaScript Advanced Concepts",
    instructor: "Alex Brown",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
  },
  {
    id: 8,
    category: "Mobile",
    title: "Flutter Mobile App Development",
    instructor: "Emma Wilson",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/1708340_7108_5.jpg",
  },
  {
    id:9 ,
    category: "Backend",
    title: "Node.js & Express API Development",
    instructor: "Daniel Lee",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/1672410_9ff1_5.jpg",
  },
  {
    id: 10,
    category: "Frontend",
    title: "Tailwind CSS From Zero to Hero",
    instructor: "Kevin Tran",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/4699780_b487_2.jpg",
  },
  {
    id:11 ,
    category: "Data Science",
    title: "Python for Data Analysis",
    instructor: "Olivia Martinez",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/903744_8eb2.jpg",
  },
  {
    id:12 ,
    category: "DevOps",
    title: "Docker & DevOps Essentials",
    instructor: "Chris Anderson",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/3490000_d298_2.jpg",
  },
  {
    id: 13,
    category: "Database",
    title: "Complete SQL & Database Bootcamp",
    instructor: "Linda Green",
    rating: 4.9,
    reviews: 8900,
    price: 54.99,
    image: "https://img-c.udemycdn.com/course/480x270/762616_7693_3.jpg",
  },
  
];


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* HERO SECTION */}
    
     <div className="bg-gray-300 w-[90%] m-auto md:mt-16 lg:mt-20 p-3 md:p-6 rounded-2xl shadow-2xl shadow-blue-400 border border-gray-400">
  <div
    className="flex flex-col lg:flex-row justify-between items-center bg-blue-600 shadow-[0_0_40px_rgba(0,0,0,0.4)]
      rounded-2xl p-3 md:p-10 gap-10 lg:gap-14 w-full lg:w-[90%] mx-auto " >
    {/* LEFT */}
    <div className="max-w-xl text-white text-center lg:text-left">
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl mb-5">
        Learn Without Limits
      </h1>

      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Start, switch, or advance your career with thousands of courses,
        Professional Certificates, and degrees from world-class universities
        and companies.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
        <button
          className="bg-white font-bold text-black p-3 w-full sm:w-44 lg:w-48 rounded-xl hover:border-2 hover:bg-blue-600  border-white
            shadow-2xl transition duration-300">
          Get Started
        </button>

       <button
          className="bg-blue-600 font-bold border border-white text-black p-3 w-full sm:w-44 lg:w-48 rounded-xl hover:border-2 hover:bg-white 
            shadow-2xl transition duration-300">
          Learn More
        </button>
      </div>
    </div>

    {/* RIGHT HERO CARD */}
    <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 w-full sm:w-[90%] lg:max-w-md space-y-5">
      <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl">
          📚
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">500+ Courses</h3>
          <p className="text-sm text-blue-600">Available now</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl">
          👥
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Expert Mentors</h3>
          <p className="text-sm text-blue-600">Industry leaders</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl">
          ⭐️
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">5-Star Reviews</h3>
          <p className="text-sm text-blue-600">Trusted by learners</p>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* STATISTICS */}
      <div className="max-w-7xl mx-auto px-4 mt-25 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
          <div className="text-gray-600">Active Students</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Online Courses</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
          <div className="text-gray-600">Expert Instructors</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
          <div className="text-gray-600">Success Rate</div>
        </div>
      </div>
      {/* ==================Explore Top Categories======================= */}
       <div className="mt-20 ">
          <h1 className=" text-center text-5xl font-bold ">
            Explore Top Categories
          </h1>
          <p className=" text-center p-5 mt-1 text-2xl">
            Choose from hundreds of courses across different categories
          </p>
          <div className="max-w-7xl mx-auto px-4 mt-14 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 ">
              <div
                className="p-6 rounded-xl bg-white shadow-md border-2 border-transparent
                hover:shadow-lg hover:border-blue-600
                transition-all duration-300 cursor-pointer"
              >
                <div className=" text-4xl font-bold text-blue-600 mb-2 text-center">
                  💻
                </div>
                <div className="text-gray-600 font-medium text-center">
                  {" "}
                  Development
                </div>
                <div className="text-gray-600 text-center"> 120 Courses</div>
              </div>
              {/*  */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border-2 border-transparent
                hover:shadow-lg hover:border-blue-600
                transition-all duration-300 cursor-pointer"
              >
                <div className=" text-4xl font-bold text-blue-600 mb-2 text-center ">
                  💼
                </div>
                <div className="text-gray-600 font-medium text-center ">
                  {" "}
                  Business
                </div>
                <div className="text-gray-600 text-center "> 85 Courses</div>
              </div>
              {/*  */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border-2 border-transparent
                hover:shadow-lg hover:border-blue-600
                transition-all duration-300 cursor-pointer"
              >
                <div className=" text-4xl font-bold text-blue-600 mb-2 text-center">
                  🎨
                </div>
                <div className="text-gray-600 font-medium text-center ">
                  {" "}
                  Design
                </div>
                <div className="text-gray-600  text-center"> 95 Courses</div>
              </div>
              {/*  */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border-2 border-transparent
                hover:shadow-lg hover:border-blue-600
                transition-all duration-300 cursor-pointer"
              >
                <div className=" text-4xl font-bold text-blue-600 mb-2 text-center">
                  📈
                </div>
                <div className="text-gray-600 font-medium text-center ">
                  {" "}
                  Marketing
                </div>
                <div className="text-gray-600 text-center"> 70 Courses</div>
              </div>
              {/*  */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border-2 border-transparent
                hover:shadow-lg hover:border-blue-600
                transition-all duration-300 cursor-pointer"
              >
                <div className=" text-4xl font-bold text-blue-600 mb-2 text-center">
                  📷
                </div>
                <div className="text-gray-600 font-medium text-center">
                  {" "}
                  Photography
                </div>
                <div className="text-gray-600 text-center"> 45 Courses</div>
              </div>
              {/*  */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border-2 border-transparent
                hover:shadow-lg hover:border-blue-600
                transition-all duration-300 cursor-pointer"
              >
                <div className=" text-4xl font-bold text-blue-600 mb-2 text-center">
                  🎵
                </div>
                <div className="text-gray-600 font-medium text-center">
                  {" "}
                  Music
                </div>
                <div className="text-gray-600 text-center"> 60 Courses</div>
              </div>
            </div>
          </div>
        </div>

      {/* FEATURED COURSES */}
      <div className="mt-20">
        <h1 className="text-center font-bold text-5xl mb-2">Featured Courses</h1>
        <p className="text-center text-2xl mb-10">
          Most popular courses chosen by our students
        </p>

       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
  {courses.map((course) => (
    <Link key={course.id} to={`/detail/${course.id}`}>
      <CourseCard course={course} />
    </Link>
  ))}
</div>
      </div>
      


         <div className="mt-20 ">
         <h1 className="text-center text-5xl text-gray-700 mt-2 mb-2 font-bold">Why Choose ETEC?</h1>
         <p className="mt-2 mb-5 p-2 text-center text-lg text-gray-600 "> We provide the best learning experience for students worldwide</p>
         <div className=" w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          <div className=" text-center">
            <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <UserRound />
            </div>
            <h3 className="font-bold text-xl mb-2"> Expert Instructors</h3>
            <p className=" text-gray-600"> Learn from industry professionals with years of experience</p>
          </div>
          <div className=" text-center">
            <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock4 />
            </div>
            <h3 className="font-bold text-xl mb-2"> Lifetime Access</h3>
            <p className=" text-gray-600"> Access your courses anytime, anywhere, on any device</p>
          </div>
          <div className=" text-center">
            <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award />
            </div>
            <h3 className="font-bold text-xl mb-2"> Certificates</h3>
            <p className=" text-gray-600"> Earn certificates upon completion to boost your career</p>
          </div>
          <div className=" text-center">
            <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
               {/* <Headset /> */}
               {/* <Headset /> */}
            </div>
            <h3 className="font-bold text-xl mb-2"> 24/7 Support</h3>
            <p className=" text-gray-600"> Get help whenever you need it from our support team</p>
          </div>

         </div>
      </div>
      {/* CTA */}
      <div className=" w-[90%] mx-auto mt-20 bg-blue-600 rounded-2xl p-10 text-center text-white shadow-[0_0_40px_rgba(0,0,0,0.4)]">
        <h1 className="text-5xl font-bold mb-4">Ready to Start Learning?</h1>
        <p className="text-2xl mb-6">Join thousands of students already learning on LearnHub</p>
        <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold cursor-pointer hover:bg-gray-300 transition-colors text-lg">
          Get Started for Free
        </button>
      </div>

    

      <div className="h-20"></div>
    </div>
  );
};

export default Home;
