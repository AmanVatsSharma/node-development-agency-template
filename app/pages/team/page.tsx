export default function TeamPage() {
  const team = [
    { name: 'Aman Kumar Sharma', role: 'Founder & Principal Architect', initials: 'AK', location: 'India' },
    { name: 'Senior Engineer', role: 'Node.js Lead', initials: 'SE', location: 'Dubai' },
    { name: '3D Director', role: 'Interactive Experiences', initials: '3D', location: 'California' },
    { name: 'Eng Manager', role: 'Delivery & SRE', initials: 'EM', location: 'Toronto' },
  ];

  return (
    <div className="w-full">
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Meet the Team</h1>
          <p className="text-gray-300">Global experts in Node.js architecture, platform engineering, and 3D experiences.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold mb-3">{m.initials}</div>
              <div className="text-lg font-bold text-gray-800 dark:text-white">{m.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{m.role}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{m.location}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

