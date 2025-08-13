import React from 'react';
import member1 from '../images/team/sijan.JPG';
import member2 from '../images/team/giri.jpg';

const teamMembers = [

  {
    name: "Sijan Khadka",
    role: "Co-Founder & CEO",
    email:"sijankhadkachhetri@gmail.com",
    number:"+977-9744308416",
    image: member1
  },
  {
    name: "Sagar Giri",
    role: "Co-Founder & CTO",
    email:"girisagar2323@gmail.com",
    number:"+977-9841615449",
    image: member2
  },
  {
    name: "Mahesh Shrestha",
    role: "Full Stack Developer",
    email:"maheshsakya34@gmail.com",
    number:"+977-9824163256"
  },
  {
    name: "Anil B.K",
    role: "App Developer",
    email:"anilbk@gmail.com",
    number:"+977-985637268"
  },
  {
    name: "Nabin Khatri",
    role: "Web Developer",
    email:"khatrinabin67@gmail.com",
    number:"+977-9823674593"
  },
  {
    name: "Aman sakya",
    role: "Frontend Developer",
    email:"amansakya34@gmail.com",
    number:"+977-9856734543"
  },
  {
    name: "Krischal Gautam",
    role: "Graphics Designer",
    email:"krischalgautam45@gmail.com",
    number:"+977-9827568742"
  }
];

const Team = () => {
  return (
    <div className="mt-8 bg-gray-100 py-15 px-15">
      <section data-aos="fade-up">
        <h2 className="text-5xl text-center text-blue-900 uppercase font-bold mb-2">
          Our Team
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-24 border-b-4 border-blue-900"></div>
        </div>
        <h3 className="text-xl lg:text-2xl text-center font-semibold text-blue-900 mb-10">
          Meet our awesome team
        </h3>

        <div className="flex flex-wrap justify-center gap-6 px-10 py-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-10 w-64 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full border-4 border-blue-900"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-800 mt-4">
                {member.name}
              </h3>
              <p className="text-gray-600 text-xl">{member.role}</p>
              <p className="text-gray-600 text-ml">{member.email}</p>
              <p className="text-gray-600 text-ml">{member.number}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
