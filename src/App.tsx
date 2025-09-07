import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  Star,
  Menu,
  X,
  Code,
  Palette,
  Smartphone,
  Globe,
  Heart,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Mock data for demonstration
const uiProjects = [
  {
    id: 1,
    title: "E-commerce App Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Mobile UI"
  },
  {
    id: 2,
    title: "Dashboard Interface",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Web UI"
  },
  {
    id: 3,
    title: "Travel App Mockup",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Mobile UI"
  },
  {
    id: 4,
    title: "Banking App UX",
    image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "UX Design"
  }
];

const webProjects = [
  {
    id: 1,
    title: "Therapy Booking Web App",
    description: "Therapy session scheduler with a modern React (Vite) + Tailwind UI and a robust Django backend, supporting appointment booking, therapist approvals, and secure session management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    techStack: ["React(Vite)", "Tailwind CSS", "Django(REST API)"],
    liveUrl: "https://emerge-e9bz.vercel.app/login",
    githubUrl: "https://github.com/Debby-arch/Emerge"
  },
  {
    id: 2,
    title: "Rust Server",
    description: "A lightweight Rust TCP Echo Server that listens on 127.0.0.1:6000, handles multiple clients concurrently, and echoes back received messages. Ideal for learning TCP networking in Rust with threading, error handling, and message size limits.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    techStack: ["Rust"],
    liveUrl: "https://github.com/Debby-arch/rust-server",
    githubUrl: "https://github.com/Debby-arch/rust-server"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Responsive portfolio website for a creative agency",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    techStack: ["Next.js", "TypeScript", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const githubRepos = [
  {
    name: "react-component-library",
    description: "A beautiful collection of reusable React components with TypeScript support",
    stars: 234,
    language: "TypeScript",
    url: "https://github.com"
  },
  {
    name: "css-animations-toolkit",
    description: "Modern CSS animations and transitions for web applications",
    stars: 156,
    language: "CSS",
    url: "https://github.com"
  },
  {
    name: "nodejs-api-boilerplate",
    description: "Production-ready Node.js API boilerplate with authentication and testing",
    stars: 89,
    language: "JavaScript",
    url: "https://github.com"
  }
];

const services = [
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    description: "Custom websites and web applications",
    price: "Starting at $2,500",
    features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Modern Tech Stack"]
  },
  {
    title: "App Development",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Mobile applications for iOS and Android",
    price: "Starting at $4,000",
    features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"]
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-8 h-8" />,
    description: "Beautiful and intuitive user interfaces",
    price: "Starting at $1,500",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'github', label: 'GitHub' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-pink-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Debbie
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-pink-500 ${
                    activeSection === item.id
                      ? 'text-pink-500 border-b-2 border-pink-500'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg border-t border-pink-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Rosedebrah Ojuok
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
                  Software Engineer & UI/UX Designer
                </p>
                <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
                  I create beautiful, functional digital experiences that users love. 
                  Specializing in modern web development, mobile apps, and intuitive design systems.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('projects')}
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full transition-all duration-300"
                >
                  View Projects
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-rose-200 shadow-2xl overflow-hidden">
                  <img
                    src="src/passport.JPG"
                    alt="Rosedebrah Ojuok"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Showcase Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              UI/UX Designs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Crafting beautiful and intuitive user interfaces that enhance user experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uiProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-pink-500/90 text-white mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Developed Websites & Apps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-stack applications built with modern technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 hover:bg-white text-gray-700 shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/90 hover:bg-white text-gray-700 shadow-lg">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Github className="w-8 h-8 text-gray-700" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Featured Repositories
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Open source projects and tools I've built for the developer community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.map((repo) => (
              <Card key={repo.name} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-800 group-hover:text-pink-600 transition-colors">
                      {repo.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{repo.stars}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {repo.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-pink-200 text-pink-700">
                      {repo.language}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Services & Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional development services tailored to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                index === 1 ? 'lg:scale-105 border-2 border-pink-200' : ''
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-300 group-hover:scale-110 ${
                    index === 0 ? 'bg-pink-100 text-pink-600' :
                    index === 1 ? 'bg-purple-100 text-purple-600' :
                    'bg-rose-100 text-rose-600'
                  }`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className={`text-2xl font-bold mb-4 ${
                    index === 0 ? 'text-pink-600' :
                    index === 1 ? 'text-purple-600' :
                    'text-rose-600'
                  }`}>
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          index === 0 ? 'bg-pink-400' :
                          index === 1 ? 'bg-purple-400' :
                          'bg-rose-400'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 transition-all duration-300 ${
                      index === 0 ? 'bg-pink-500 hover:bg-pink-600' :
                      index === 1 ? 'bg-purple-500 hover:bg-purple-600' :
                      'bg-rose-500 hover:bg-rose-600'
                    } text-white shadow-lg hover:shadow-xl`}
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring your project to life? Get in touch and let's create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">ojuokrosedebrah@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+254111550163</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full w-12 h-12 p-0">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-12 h-12 p-0">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button size="sm" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full w-12 h-12 p-0">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 rounded-lg resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-gray-600">Made with love by Debbie</span>
            </div>
            
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                © 2025 Rosedebrah Ojuok. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-pink-500">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-purple-500">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-rose-500">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;