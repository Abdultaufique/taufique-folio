const Achievements = () => (
  <section id="achievements" className="py-20 px-4 bg-white">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-poppins text-3xl font-bold text-black">Experience & Achievements</h2>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold text-lg text-blue-600 mb-2">Hackathons</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Internal Hackathon 2023 (Participant)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-blue-600 mb-2">Certifications</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Python Programming – Infosys</li>
            <li>Web Development – Coursera</li>
            <li>TCS iON Career Edge</li>
            <li>GeeksforGeeks Workshop Certificate</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
