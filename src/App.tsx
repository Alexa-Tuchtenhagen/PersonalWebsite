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
           Invent with kindness. Build with strength.
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
              Hi, I’m Alexa Tuchtenhagen — a robotics engineering student who believes engineering is a blend of creativity, curiosity, and hands-on problem-solving. I love bringing ideas to life through mechanical design, electronics, and fabrication, whether that means CNC machining parts, shaping materials, or building unique interactive devices.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              {/*Edit Here*/}
              I’m passionate about technology that supports people — especially the ones who’ve made a meaningful impact on my life. Some of my favorite projects are deeply personal, like Find Beauty in Everything…, a robotic butterfly inspired by my mom, who works as a hospice nurse. Her compassion and strength motivate me to create devices that bring comfort, spark emotion, and create moments of peace and connection through robotics and thoughtful design.
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
              Fusion360,
              3D Printing,
              CNCing,
              Metal Work,
              Electrical work
              
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
                title: 'Find Beauty in Everything...',
                description: 'Find Beauty in Everything is a robotic butterfly designed to offer warmth, calm, and emotional comfort to hospice patients. It serves as a gentle reminder that even in life’s final chapter, beauty still finds us — in light, in movement, and in the quiet presence of care.',
                tags: ['React', 'TypeScript', 'Tailwind'],
                image: '/FBE.jpeg'
              },
              {
                /*Edit Here*/
                title: 'Oscar',
                description: 'Oscar is team 3294s 2023 robot for the FIRST Robotics Competition: Charged Up. With a powerful drive system and a reliable arm, Oscar could grab cones and cubes and score them smoothly, playing a key role in our team’s success.',
                tags: ['Node.js', 'MongoDB', 'Express'],
                image: '/Oscar.jpeg'
              },
              {
                /*Edit Here*/
                title: 'Fenris',
                description: 'A creative project demonstrating design skills and technical implementation. Discuss what you learned.',
                tags: ['UI/UX', 'Figma', 'React'],
                image: '/Fenris.jpeg'
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
                    { name: 'Robotic Arms', description: 'Robotic Arms is a dual-arm robotic system featuring a lead-and-follow design, allowing one arm to mirror the motion of the other. It can be manually taught and recorded to perform tasks, demonstrating a real-world robotic solution focused on intuitive programming and motion control.', codeUrl: 'https://huggingface.co/docs/lerobot/en/koch', linkUrl: '/Robotic Arms.pdf', image: '/Robotic Arms.jpeg' },
                    { name: 'VEXU Ring Bot', description: 'This VEX U robot was designed to pick up game rings and accurately place them on goal posts. Our team engineered a reliable ring-intake and scoring system, demonstrating a hands-on robotic solution built to address a real competition challenge', codeUrl: 'https://github.com/Stormpiethon/VEX_Stuff/tree/main/vex-vscode-projects/big_boi/src', linkUrl: 'public/VEXU Ring Bot.pdf', image: '/Ring Bot.jpeg' }
                  ]
                },
                {
                  number: 2,
                  title: 'Demonstrate embedded microprocessor system and circuit skills.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Find Beauty in Everything...', description: 'Find Beauty in Everything... is a robotic art piece powered by an embedded microcontroller. I programmed and wired the system to control gentle wing-flapping motion alongside a soft constant light, creating a peaceful physical representation of calming emotion. This project highlights my embedded programming and circuit integration skills in an expressive design context.', codeUrl: 'https://github.com/Alexa-Tuchtenhagen/FBE.../tree/main', linkUrl: '/Find Beauty in Everything....pdf', image: '/FBE.jpeg' },
                    { name: 'Gosh Darn It', description: 'Gosh Darn It is a custom M5Core2-based controller with buttons and LEDs used to log professor catch-phrases and upload data to ThingSpeak. I designed the 3D enclosure, wired the interface hardware, and contributed early code for button inputs, LED control, and display behavior.', codeUrl: 'https://github.com/JerrodBolton/Gosh-dang-it', linkUrl: '/Alexas Lab 15.1_ Building an Application (1).pdf', image: '/Gosh Darn it.jpg' }
                  ]
                },
                {
                  number: 3,
                  title: 'Develop mechanical control systems by implementing transducers, actuators, feedback, vision and sensing systems, and other mechanical systems into robotic platforms.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Provost Cat Feeder', description: 'The Provost Cat Feeder uses an ultrasonic sensor, Arduino Uno, and servo-driven lid to detect when our campus cat approaches and open automatically. The 3D-printed enclosure protects food from weather and critters, demonstrating practical sensing, actuation, and mechanical control integration.', codeUrl: 'https://github.com/Alexa-Tuchtenhagen/Provost/blob/main/Code', linkUrl: '/Provost Cat Feeder (1).pdf', image: '/Provost.jpeg' },
                    { name: 'Oscar', description: 'Oscar featured an IMU for level sensing, IR and magnetic limit switches to control arm travel, a camera for vision-based targeting, and a winch-driven arm mechanism. LEDs communicated game piece selections and ramp brake status. This robot demonstrated real-world integration of sensing, actuation, and feedback systems.', codeUrl: 'https://github.com/arudlang/PRB_Robotics/tree/master/2023/2023%20Duluth%20V1/DuluthRegionalCodeV1', linkUrl: 'Oscar.pdf', image: '/Oscar.jpeg' }
                  ]
                },
                {
                  number: 4,
                  title: 'Examine and assess a variety of applications within the field of robotics.',
                  /*Edit Here*/
                  projects: [
                    { name: 'VEXU Climb Bot', description: 'The VEXU Climb Bot used a motor-powered pulley and hook mechanism to lift itself onto the field structure during end-game. This project examined a targeted robotics application — competitive climbing — and evaluated mechanical and strategic design trade-offs', codeUrl: 'https://github.com/Stormpiethon/VEX_Stuff/tree/main/vex-vscode-projects/small%20_boi/src', linkUrl: '/VEXU Climb Bot.pdf', image: '/Climb Bot.jpeg' },
                    { name: 'CNC', description: 'For this project, I restored and operated a CNC machine that had been damaged in storage. I repaired the wiring, reconfigured the setup, and self-taught the operation workflow, including toolpath creation and machine calibration. Through this experience, I explored CNC technology as a key application within robotics and manufacturing, gaining hands-on insight into automated machining systems and their role in robotic fabrication and prototyping.', codeUrl: 'https://github.com/Alexa-Tuchtenhagen/CNC/blob/main/1001.nc', linkUrl: 'https://example.com/project4b', image: '/CNC.jpeg' }
                  ]
                },
                {
                  number: 5,
                  title: 'Model, analyze, and design systems or processes that integrate hardware and software to control autonomous mechanical systems.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Provost Cat Feeder', description: 'The Provost Cat Feeder is an autonomous feeding system designed by our team to serve our campus cat, Max, while protecting his food from weather and critters. We integrated an Arduino Uno, ultrasonic sensor, and servo into a 3D-printed enclosure, creating a system that detects when Max approaches and automatically opens the feeding compartment. This project models and implements a complete hardware-software control system, combining sensing, actuation, and programmed decision-logic to enable autonomous motion and interaction.', codeUrl: 'https://github.com/Alexa-Tuchtenhagen/Provost/blob/main/Code', linkUrl: '/Provost Cat Feeder (1).pdf', image: '/Provost.jpeg' },
                    { name: 'Fenris', description: 'Fenris is a mining and defense rover developed at Crow Industries. Our team integrated embedded hardware, motor control systems, and custom software to enable reliable field mobility and autonomous operation. My contributions focused on the physical engineering side, including 3D modeling components, assembling and wiring electrical systems, and supporting hardware integration and testing. This project demonstrates the design and implementation of a coordinated hardware-software control system for rugged robotic applications.', codeUrl: 'https://github.com/yourusername/project5b', linkUrl: 'https://example.com/project5b', image: '/Fenris.jpeg' }
                  ]
                },
                {
                  number: 6,
                  title: 'Implement artificial intelligence and data systems into robotic platforms.',
                  /*Edit Here*/
                  projects: [
                    { name: 'Gosh Darn It', description: 'Our team built Gosh Darn It, a controller system that tracks professor catch-phrases, records user input, and sends the data to ThingSpeak for analysis and visualization, demonstrating AI and data system integration in a robotic platform.', codeUrl: 'https://github.com/JerrodBolton/Gosh-dang-it', linkUrl: '/Alexas Lab 15.1_ Building an Application (1).pdf', image: '/Gosh Darn it.jpg' },
                    { name: 'Robotic Arms', description: 'Our team built Robotic Arms, a dual-arm system that mirrors and records arm movements, demonstrating data-driven control and motion replication in an embedded robotics platform.', codeUrl: 'https://huggingface.co/docs/lerobot/en/koch', linkUrl: '/Robotic Arms.pdf', image: '/Robotic Arms.jpeg' }
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
                      <div key={projectIdx} className="bg-white border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                            style={{ backgroundImage: `url(${project.image})` }}
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-sm tracking-wider text-stone-500 mb-2">PROJECT {projectIdx + 1}</h4>
                          <h5 className="text-lg font-light text-stone-800 mb-3">{project.name}</h5>
                          <p className="text-stone-600 text-sm leading-relaxed mb-4">
                            {project.description}
                          </p>
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
