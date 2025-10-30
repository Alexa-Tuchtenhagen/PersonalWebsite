// Import necessary icons and React hooks l
import { Menu, X, ChevronRight, Mail, Github, Linkedin, GraduationCap, Code, Palette, ExternalLink, Video } from 'lucide-react';
import { useState } from 'react';

function App() {
  // State to track mobile menu open/closed status
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State to track which tab is active in the Work section (projects, degree objectives, or SIP)
  const [activeTab, setActiveTab] = useState('projects');

  return (
    // Main container with minimum full screen height and light background
    <div className="min-h-screen bg-stone-50">

      {/* Fixed header with glass morphism effect */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm border-b border-stone-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-2xl font-light tracking-wider text-sage-700">
            Alexa Tuchtenhagen
          </div>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">ABOUT</a>
            <a href="#skills" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">SKILLS</a>
            <a href="#work" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">WORK</a>
            <a href="#contact" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">CONTACT</a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-stone-600"
          >
            {/* Toggle between X and Menu icon based on menu state */}
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu - only shown when mobileMenuOpen is true */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#about" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">ABOUT</a>
              <a href="#skills" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">SKILLS</a>
              <a href="#work" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">WORK</a>
              <a href="#contact" className="text-sm tracking-wide text-stone-600 hover:text-sage-600 transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero section - full screen height with background image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with darkening filter */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.7)'
          }}
        />

        {/* Hero content - centered text overlay */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Decorative line above title */}
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-sage-300 mb-8 mx-auto"></div>
          </div>

          {/* Main hero heading */}
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Robotics Engineer<br />
            <span className="text-sage-200"></span>
          </h1>

          {/* Hero subheading */}
          <p className="text-lg md:text-xl text-stone-200 mb-12 font-light max-w-2xl mx-auto">
          {/*Edit Here*/}
           Placeholder
          </p>

          {/* Call to action button - scrolls to work section */}
          <a href="#work" className="group inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-sm tracking-wider transition-all duration-300">
            VIEW MY WORK
            {/* Arrow icon with hover animation */}
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - text content */}
          <div>
            {/* Decorative line */}
            <div className="h-px w-12 bg-sage-400 mb-6"></div>

            {/* Section heading */}
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6 leading-tight">
              About Me
            </h2>

            {/* About paragraphs */}
            <p className="text-stone-600 leading-relaxed mb-6">
              {/*Edit Here*/}
              Placeholder Paragraph 1
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              {/*Edit Here*/}
              Placeholder Paragraph 2
            </p>

            {/* Social media links */}
            <div className="flex gap-4">
              <a href="#" className="text-sage-600 hover:text-sage-700 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-sage-600 hover:text-sage-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-sage-600 hover:text-sage-700 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right column - image with angular clip path */}
          <div className="relative h-96 md:h-full min-h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center clip-angular"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1268139/pexels-photo-1268139.jpeg?auto=compress&cs=tinysrgb&w=1200)',
                clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="py-32 px-6 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="h-px w-12 bg-sage-400 mb-6 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              {/*Edit Here*/}
              Placeholder
            </p>
          </div>

          {/* Skills grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Array of skill categories */}
            {[
              {
                icon: Code,
                /*Edit Here*/
                title: 'Development',
                /*Edit Here*/
                skills: ['Hold']
              },
              {
                icon: Palette,
                /*Edit Here*/
                title: 'Design',
                /*Edit Here*/
                skills: ['Hold']
              },
              {
                icon: GraduationCap,
                /*Edit Here*/
                title: 'Learning',
                /*Edit Here*/
                skills: ['Hold', 'Hold']
              }
            ].map((category, idx) => {
              // Extract the icon component from the category object
              const Icon = category.icon;
              return (
                // Skill card with hover effect
                <div
                  key={idx}
                  className="group bg-white p-10 hover:shadow-xl transition-all duration-300 border border-stone-200 hover:border-sage-300"
                >
                  {/* Icon at top of card */}
                  <Icon className="w-10 h-10 text-sage-600 mb-6" />

                  {/* Category title */}
                  <h3 className="text-2xl font-light text-stone-800 mb-4">{category.title}</h3>

                  {/* List of skills with bullet points */}
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-stone-600 text-sm flex items-center gap-2">
                        {/* Custom bullet point */}
                        <div className="w-1.5 h-1.5 bg-sage-400 rounded-full"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work section with tabbed interface */}
      <section id="work" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section header with tab navigation */}
          <div className="text-center mb-12">
            <div className="h-px w-12 bg-sage-400 mb-6 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              My Work
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto mb-12">
              {/*Edit Here*/}
              A selection of my projects and degree requirements
            </p>

            {/* Tab buttons to switch between different views */}
            <div className="flex justify-center gap-4 mb-16">
              {/* Projects tab */}
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
                  activeTab === 'projects'
                    ? 'bg-sage-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                PROJECTS
              </button>

              {/* Degree Objectives tab */}
              <button
                onClick={() => setActiveTab('degree')}
                className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
                  activeTab === 'degree'
                    ? 'bg-sage-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                DEGREE OBJECTIVES
              </button>

              {/* SIP tab */}
              <button
                onClick={() => setActiveTab('sip')}
                className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
                  activeTab === 'sip'
                    ? 'bg-sage-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                SIP
              </button>
            </div>
          </div>

          {/* Projects tab content - shown when activeTab is 'projects' */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
            {/* Array of project data */}
            {[
              {
                /*Edit Here*/
                title: 'Project Name 1',
                description: 'A brief description of what this project does and the technologies used. Highlight the problem solved and your role.',
                tags: ['React', 'TypeScript', 'Tailwind'],
                image: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
              },
              {
                /*Edit Here*/
                title: 'Project Name 2',
                description: 'Another project showcasing different skills. Explain the challenge, your approach, and the outcome.',
                tags: ['Node.js', 'MongoDB', 'Express'],
                image: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
              },
              {
                /*Edit Here*/
                title: 'Project Name 3',
                description: 'A creative project demonstrating design skills and technical implementation. Discuss what you learned.',
                tags: ['UI/UX', 'Figma', 'React'],
                image: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png'
              }
            ].map((project, idx) => (
              // Project card with alternating layout (image left/right)
              <div
                key={idx}
                className={`group grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Project image column - alternates sides based on index */}
                <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative h-80 overflow-hidden">
                    {/* Image with zoom effect on hover */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                </div>

                {/* Project details column */}
                <div className={idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="h-px w-12 bg-sage-400 mb-6"></div>

                  {/* Project title */}
                  <h3 className="text-3xl font-light text-stone-800 mb-4">{project.title}</h3>

                  {/* Project description */}
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 bg-sage-50 text-sage-700 text-sm border border-sage-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors group/link"
                  >
                    VIEW PROJECT
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Degree Objectives tab content - shown when activeTab is 'degree' */}
          {activeTab === 'degree' && (
            <div className="space-y-12">
              {/* Array of 6 degree objectives */}
              {[
                {
                  number: 1,
                  title: 'Design and complete robotic and embedded systems solutions that address real-world situations and challenges.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Project 1-A Name', description: 'Description for objective 1, project A', codeUrl: 'https://github.com/yourusername/project1a', linkUrl: 'https://example.com/project1a' },
                    { name: 'Project 1-B Name', description: 'Description for objective 1, project B', codeUrl: 'https://github.com/yourusername/project1b', linkUrl: 'https://example.com/project1b' }
                  ]
                },
                {
                  number: 2,
                  title: 'Demonstrate embedded microprocessor system and circuit skills.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Project 2-A Name', description: 'Description for objective 2, project A', codeUrl: 'https://github.com/yourusername/project2a', linkUrl: 'https://example.com/project2a' },
                    { name: 'Project 2-B Name', description: 'Description for objective 2, project B', codeUrl: 'https://github.com/yourusername/project2b', linkUrl: 'https://example.com/project2b' }
                  ]
                },
                {
                  number: 3,
                  title: 'Develop mechanical control systems by implementing transducers, actuators, feedback, vision and sensing systems, and other mechanical systems into robotic platforms.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Project 3-A Name', description: 'Description for objective 3, project A', codeUrl: 'https://github.com/yourusername/project3a', linkUrl: 'https://example.com/project3a' },
                    { name: 'Project 3-B Name', description: 'Description for objective 3, project B', codeUrl: 'https://github.com/yourusername/project3b', linkUrl: 'https://example.com/project3b' }
                  ]
                },
                {
                  number: 4,
                  title: 'Examine and assess a variety of applications within the field of robotics.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Project 4-A Name', description: 'Description for objective 4, project A', codeUrl: 'https://github.com/yourusername/project4a', linkUrl: 'https://example.com/project4a' },
                    { name: 'Project 4-B Name', description: 'Description for objective 4, project B', codeUrl: 'https://github.com/yourusername/project4b', linkUrl: 'https://example.com/project4b' }
                  ]
                },
                {
                  number: 5,
                  title: 'Model, analyze, and design systems or processes that integrate hardware and software to control autonomous mechanical systems.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Project 5-A Name', description: 'Description for objective 5, project A', codeUrl: 'https://github.com/yourusername/project5a', linkUrl: 'https://example.com/project5a' },
                    { name: 'Project 5-B Name', description: 'Description for objective 5, project B', codeUrl: 'https://github.com/yourusername/project5b', linkUrl: 'https://example.com/project5b' }
                  ]
                },
                {
                  number: 6,
                  title: 'Implement artificial intelligence and data systems into robotic platforms.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Project 6-A Name', description: 'Description for objective 6, project A', codeUrl: 'https://github.com/yourusername/project6a', linkUrl: 'https://example.com/project6a' },
                    { name: 'Project 6-B Name', description: 'Description for objective 6, project B', codeUrl: 'https://github.com/yourusername/project6b', linkUrl: 'https://example.com/project6b' }
                  ]
                }
              ].map((objective) => (
                // Objective card
                <div key={objective.number} className="bg-sage-50 border border-sage-200 p-8">
                  {/* Objective header with number and title */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Numbered badge */}
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-600 text-white flex items-center justify-center text-xl font-light">
                      {objective.number}
                    </div>
                    {/* Objective description */}
                    <p className="text-stone-700 leading-relaxed pt-2">
                      {objective.title}
                    </p>
                  </div>

                  {/* Two projects per objective - displayed in a grid */}
                  <div className="grid md:grid-cols-2 gap-6 ml-16">
                    {/* Map through the projects array for this objective */}
                    {objective.projects.map((project, projectIdx) => (
                      <div key={projectIdx} className="bg-white p-6 border border-stone-200">
                        <h4 className="text-sm tracking-wider text-stone-500 mb-2">PROJECT {projectIdx + 1}</h4>
                        {/* Project name - edit this text in the data array above */}
                        <h5 className="text-lg font-light text-stone-800 mb-3">{project.name}</h5>
                        {/* Project description - edit this text in the data array above */}
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                        {/* Code and Link buttons with placeholder URLs */}
                        <div className="flex gap-3">
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm transition-colors"
                          >
                            <Code size={16} />
                            Code
                          </a>
                          <a
                            href={project.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm transition-colors"
                          >
                            <ExternalLink size={16} />
                            Link
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SIP (Senior Individualized Project) tab content - shown when activeTab is 'sip' */}
          {activeTab === 'sip' && (
            <div className="bg-sage-50 border border-sage-200 p-12 text-center">
              {/* SIP heading */}
              <h3 className="text-3xl font-light text-stone-800 mb-4">Senior Innovation Project</h3>
              {/* SIP description */}
              <p className="text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                {/*Edit Here*/}
                Details about your SIP will be displayed here.
              </p>
              {/* SIP action buttons */}
              <div className="flex gap-4 justify-center">
                {/* Code link button */}
                <a
                  /*Edit Here*/
                  href="https://github.com/yourusername/sip-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white text-sm tracking-wider transition-colors"
                >
                  <Code size={18} />
                  View Code
                </a>
                {/* Video link button */}
                <a
                  href="https://example.com/sip-video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white text-sm tracking-wider transition-colors"
                >
                  <Video size={18} />
                  Watch Video
                </a>
                {/* Documentation link button */}
                <a
                  href="https://example.com/sip-documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white text-sm tracking-wider transition-colors"
                >
                  <ExternalLink size={18} />
                  View Documentation
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact section with dark background */}
      <section id="contact" className="py-32 px-6 bg-sage-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-px w-12 bg-sage-300 mb-6 mx-auto"></div>

          {/* Contact heading */}
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's Connect
          </h2>

          {/* Contact description */}
          <p className="text-sage-100 mb-12 text-lg">
            Place
          </p>

          {/* Contact links */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            {/* Email link */}
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-sage-100 hover:text-white transition-colors">
              <Mail size={20} />
              your.email@example.com
            </a>
            {/* GitHub link */}
            <a href="https://github.com/yourusername" className="flex items-center gap-2 text-sage-100 hover:text-white transition-colors">
              <Github size={20} />
              @yourusername
            </a>
            {/* LinkedIn link */}
            <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 text-sage-100 hover:text-white transition-colors">
              <Linkedin size={20} />
              /in/yourusername
            </a>
          </div>

          {/* Resume download button */}
          <button className="group inline-flex items-center gap-2 bg-white text-sage-900 hover:bg-sage-50 px-8 py-4 text-sm tracking-wider transition-all duration-300">
            DOWNLOAD RESUME
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-950 text-sage-300 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright text */}
          <div className="text-sm">© 2025 Your Name. All rights reserved.</div>
          {/* Location or tagline */}
          <div className="text-sm font-light tracking-wider">Place</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
