import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We are dedicated to providing the highest quality healthcare
              services to our community. Our mission is to improve the health
              and well-being of our patients through compassionate care,
              cutting-edge technology, and a commitment to excellence.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Patient-centered care</li>
              <li>Integrity and transparency</li>
              <li>Continuous improvement</li>
              <li>Teamwork and collaboration</li>
              <li>Community engagement</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <Image
                  src={`/images/team-member${member}.jpg`}
                  alt={`Team Member ${member}`}
                  width={150}
                  height={150}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. John Doe</h3>
                <p className="text-gray-600">Specialization</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
