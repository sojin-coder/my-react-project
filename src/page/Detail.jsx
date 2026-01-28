import React from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  Star,
  Globe,
} from "lucide-react";
import courses from "../data/courses";

const Detail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div className="p-10 text-center">Course not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow">

        {/* Hero */}
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-[320px] object-cover rounded-t-xl"
          />
          <span className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
            Development
          </span>
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-3">
            {course.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {course.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Star className="text-yellow-500" size={16} />
              4.8 (2,300)
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Globe size={16} /> English
            </span>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Left */}
            <div className="md:col-span-2 space-y-8">

              {/* What you’ll learn */}
              <section>
                <h2 className="font-semibold text-xl mb-4">
                  What you’ll learn
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3 text-gray-600">
                  {course.learn.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Curriculum */}
              <section>
                <h2 className="font-semibold text-xl mb-4">
                  Course Curriculum
                </h2>
                <div className="border rounded-lg divide-y">
                  {course.curriculum.map((c, i) => (
                    <div
                      key={i}
                      className="flex justify-between px-4 py-3 text-sm"
                    >
                      <span>{c.title}</span>
                      <span className="text-gray-500">{c.time}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Instructor */}
              <section>
                <h2 className="font-semibold text-xl mb-4">
                  Instructor
                </h2>
                <p className="font-medium">{course.instructor}</p>
                <p className="text-sm text-gray-500">
                  Senior Web Developer & Instructor
                </p>
              </section>
            </div>

            {/* Right Card */}
            <div className="border rounded-xl p-6 h-fit shadow-sm">
              <p className="text-3xl font-bold mb-4">
                ${course.price}
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Detail;
