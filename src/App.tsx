import { BookOpen, Award, Users, Calendar, Star, Phone, Mail, MapPin, GraduationCap, TrendingUp, CheckCircle, Menu, X, Quote, ChevronDown, Clock, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-gray-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white transform rotate-45 shadow-lg animate-float-1"></div>
        <div className="absolute top-32 right-32 w-24 h-24 bg-white transform -rotate-12 shadow-md animate-float-2"></div>
        <div className="absolute top-64 left-1/4 w-28 h-28 bg-white transform rotate-12 shadow-lg animate-float-3"></div>
        <div className="absolute bottom-32 right-20 w-36 h-36 bg-white transform -rotate-45 shadow-lg animate-float-4"></div>
        <div className="absolute bottom-64 left-32 w-20 h-20 bg-white transform rotate-30 shadow-md animate-float-5"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white transform -rotate-30 shadow-lg animate-float-6"></div>
        <div className="absolute top-20 left-1/2 w-24 h-24 bg-white transform rotate-60 shadow-md animate-float-7"></div>
        <div className="absolute bottom-20 left-1/2 w-28 h-28 bg-white transform -rotate-60 shadow-lg animate-float-8"></div>
      </div>
      <div className="relative z-10">
      <nav className="fixed top-0 w-full bg-ash/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-900" />
              <span className="text-2xl font-bold text-white">MathsCapital</span>
            </div> 
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
              <a href="#pricing" className="text-white hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Reviews</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 shadow-lg animate-slideDown">
            <div className="px-4 py-2 space-y-2">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all">About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all">Services</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all">Pricing</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all">Reviews</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-all">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Master Mathematics with
                <span className="text-blue-900"> Expert Guidance</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional mathematics tutoring by Rasika P. Wijesinghe - transforming complex concepts into simple understanding.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl">
                  Get Started
                </a>
                <a href="#services" className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8">
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Award className="w-8 h-8 text-blue-900" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Experience</p>
                        <p className="text-xl font-bold text-gray-900">10+ Years</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Users className="w-8 h-8 text-blue-900" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Students Taught</p>
                        <p className="text-xl font-bold text-gray-900">500+</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Star className="w-8 h-8 text-blue-900" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Success Rate</p>
                        <p className="text-xl font-bold text-gray-900">95%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-600 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Rasika P. Wijesinghe</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A dedicated mathematics educator with a passion for making complex mathematical concepts accessible and engaging for every student.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Comprehensive Curriculum</h3>
              <p className="text-black leading-relaxed">
                Covering all levels from foundational mathematics to advanced calculus and statistics, tailored to individual learning needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Proven Methods</h3>
              <p className="text-black leading-relaxed">
                Using innovative teaching techniques and personalized approaches to ensure every student achieves their full potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Certified Excellence</h3>
              <p className="text-black leading-relaxed">
                Professionally qualified with advanced degrees in mathematics education and a track record of outstanding student results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Flexible learning options designed for your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover-lift group">
              <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Individual Tutoring</h3>
              <p className="text-black-300 text-sm mb-3">One-on-one personalized sessions focused on your specific needs</p>
              <div className="text-blue-900 font-semibold text-sm">Starting from Rs. 2,500/session</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover-lift group">
              <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Group Classes</h3>
              <p className="text-black-300 text-sm mb-3">Small group sessions promoting collaborative learning</p>
              <div className="text-blue-900 font-semibold text-sm">Starting from Rs. 1,500/session</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover-lift group">
              <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Exam Preparation</h3>
              <p className="text-black-300 text-sm mb-3">Targeted preparation for O/L, A/L, and university entrance exams</p>
              <div className="text-blue-900 font-semibold text-sm">Starting from Rs. 3,000/session</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover-lift group">
              <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Flexible Scheduling</h3>
              <p className="text-black-300 text-sm mb-3">Weekend and evening sessions available to fit your schedule</p>
              <div className="text-blue-900 font-semibold text-sm">7 days a week availability</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 bg-gray-600 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Affordable Pricing Plans</h2>
            <p className="text-xl text-white">Choose the perfect plan for your learning journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual</h3>
                <div className="text-4xl font-bold text-blue-900 mb-2">Rs. 2,500</div>
                <p className="text-gray-500">per session</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">One-on-one tutoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Personalized curriculum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Progress tracking</span>
                </li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-blue-900 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Group Class</h3>
                <div className="text-4xl font-bold text-blue-900 mb-2">Rs. 1,500</div>
                <p className="text-gray-500">per session</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Small group (4-6 students)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Interactive learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Peer collaboration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Regular assessments</span>
                </li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Exam Prep</h3>
                <div className="text-4xl font-bold text-blue-900 mb-2">Rs. 3,000</div>
                <p className="text-gray-500">per session</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Intensive exam focus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Past paper practice</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Exam strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-700">Mock examinations</span>
                </li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Students Say</h2>
            <p className="text-xl font-bold text-white">Real feedback from our successful students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-900 mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Sir Rasika's teaching method is exceptional. I improved from C to A in just 6 months. His patience and clear explanations made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">AS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Amara Silva</p>
                  <p className="text-gray-500 text-sm">A/L Mathematics Student</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-900 mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The group classes were amazing! Learning with peers and Sir Rasika's guidance helped me understand complex calculus concepts easily."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">NP</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Nimal Perera</p>
                  <p className="text-gray-500 text-sm">University Student</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-900 mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Thanks to Sir Rasika's exam preparation sessions, I scored 95 marks in O/L Mathematics. His practice papers were incredibly helpful!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">SD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Saman De Silva</p>
                  <p className="text-gray-500 text-sm">O/L Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 bg-'#00008B' px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Student Success Stories</h2>
            <p className="text-xl text-blue-50">Our students consistently achieve outstanding results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">95%</p>
              <p className="text-blue-50">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-blue-50">Students Taught</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Star className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">4.9/5</p>
              <p className="text-blue-50">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">20+</p>
              <p className="text-blue-50">Years Experience</p>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-red-200 flex-shrink-0 mt-1" />
                <p className="text-white">A/L Mathematics: 100% pass rate with 85% achieving A grades</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-red-200 flex-shrink-0 mt-1" />
                <p className="text-white">O/L Mathematics: Students improving grades by average of 2 levels</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-start space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-red-200 flex-shrink-0 mt-1" />
                <p className="text-white">University entrance: 90% of students gain admission to top universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 bg-gradient-to-red from-emerald-500 to-teal-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">🎉 Special Offer for New Students!</h2>
            <p className="text-xl text-emerald-50 mb-6">
              Get your first session FREE when you sign up for a monthly package. Limited time offer!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl">
                Claim Free Session
              </a>
              <a href="#pricing" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition-colors border-2 border-white/20">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>
      



      


      <section className="py-16 bg-gray-600 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white">Get answers to common questions about our tutoring services</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "What subjects do you teach?",
                answer: "I specialize in all levels of mathematics including O/L Mathematics, A/L Pure Mathematics, A/L Applied Mathematics, and university-level calculus and statistics."
              },
              {
                question: "Do you offer online sessions?",
                answer: "Yes, I offer both in-person and online tutoring sessions via Zoom or Google Meet. Online sessions are just as effective with interactive whiteboards and screen sharing."
              },
              {
                question: "How do you track student progress?",
                answer: "I provide regular assessments, progress reports, and maintain detailed records of each student's improvement. Parents receive monthly updates on their child's development."
              },
              {
                question: "What is your teaching methodology?",
                answer: "I use a personalized approach that adapts to each student's learning style. This includes visual aids, practical examples, step-by-step problem solving, and regular practice sessions."
              },
              {
                question: "Can you help with exam preparation?",
                answer: "Absolutely! I offer specialized exam preparation for O/L, A/L, and university entrance exams with past paper practice, time management techniques, and exam strategies."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform" />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-white mb-8">
                Ready to start your journey to mathematical excellence? Contact us today to schedule your first session.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-white">+94 77 348 0852</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white">rasika@mathscapital.lk</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-white">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="+94 77 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject-level" className="block text-sm font-semibold text-black mb-2">Subject Level</label>
                  <select id="subject-level" aria-required="true" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all">
                    <option value="">Select your level</option>
                    <option value="ol">O/L Mathematics</option>
                    <option value="al-pure">A/L Pure Mathematics</option>
                    <option value="al-applied">A/L Applied Mathematics</option>
                    <option value="university">University Level</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your learning goals and current challenges..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-600 text-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">MathsCapital</span>
              </div>
              <p className="text-white text-sm">
                Empowering students to achieve mathematical excellence through expert guidance and personalized instruction.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>Individual Tutoring</li>
                <li>Group Classes</li>
                <li>Exam Preparation</li>
                <li>Online Sessions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Class Schedule</h3>
              <div className="space-y-2 text-sm text-white">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 4:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Saturday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Sunday: 10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-white">
            <p>&copy; 2025 MathsCapital. All rights reserved. Tutor: Rasika P. Wijesinghe</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all duration-300 z-50 hover-lift"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
      </div>
    </div>
  );
}

export default App;