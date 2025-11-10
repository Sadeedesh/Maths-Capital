import { BookOpen, Award, Users, Calendar, Star, Phone, Mail, MapPin, GraduationCap, TrendingUp, CheckCircle, Menu, X, Quote, ChevronDown, Clock, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import Sir from "./assets/rasikaSr.png";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { currentTheme } = useTheme();

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
    <div className="min-h-screen relative overflow-hidden professional-bg">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-8 h-8 border-2 border-red-500 rotate-45 animate-float-1"></div>
        <div className="absolute top-40 right-24 w-6 h-6 bg-red-600 rounded-full animate-float-2"></div>
        <div className="absolute top-72 left-1/3 w-4 h-4 bg-white animate-float-3"></div>
        <div className="absolute bottom-40 right-16 w-10 h-10 border border-white rounded-full animate-float-4"></div>
        <div className="absolute bottom-72 left-24 w-5 h-5 bg-red-400 rotate-45 animate-float-5"></div>
        <div className="absolute top-1/2 right-1/3 w-7 h-7 border-2 border-red-300 animate-float-6"></div>
        <div className="absolute top-24 left-1/2 w-3 h-3 bg-white rounded-full animate-float-7"></div>
        <div className="absolute bottom-24 left-1/2 w-6 h-6 border border-red-500 rotate-12 animate-float-8"></div>
      </div>
      <div className="relative z-10">
      <nav className="fixed top-0 w-full backdrop-blur-sm shadow-sm z-50" style={{ backgroundColor: `${currentTheme.colors.primary}95` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8" style={{ color: currentTheme.colors.accent }} />
              <span className="text-2xl font-bold text-white">MathsCapital</span>
            </div> 
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-white hover:[color:#06283D] transition-colors">About</a>
              <a href="#services" className="text-white hover:[color:#06283D] transition-colors">Services</a>
              <a href="#pricing" className="text-white hover:[color:#06283D] transition-colors">Pricing</a>
              <a href="#lms" className="text-white hover:[color:#06283D] transition-colors">LMS</a>
              <a href="#testimonials" className="text-white hover:[color:#06283D] transition-colors">Reviews</a>
              <a href="#contact" className="text-white hover:[color:#06283D] transition-colors">Contact</a>
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
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-red-400 hover:bg-gray-800 rounded-lg transition-all">About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-red-400 hover:bg-gray-800 rounded-lg transition-all">Services</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-red-400 hover:bg-gray-800 rounded-lg transition-all">Pricing</a>
              <a href="#lms" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-red-400 hover:bg-gray-800 rounded-lg transition-all">LMS</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-red-400 hover:bg-gray-800 rounded-lg transition-all">Reviews</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 px-2 text-white hover:text-red-400 hover:bg-gray-800 rounded-lg transition-all">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
                Master <span style={{ color: currentTheme.colors.primary }}>Mathematics</span>
                <br />with Expert Guidance
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                Professional mathematics tutoring by Rasika P. Wijesinghe - transforming complex concepts into simple understanding.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2" style={{ borderColor: currentTheme.colors.primary, backgroundColor: currentTheme.colors.surface }}>
                  <span className="text-white font-semibold text-sm sm:text-base">Local Syllabus</span>
                </div>
                <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2" style={{ borderColor: currentTheme.colors.primary, backgroundColor: currentTheme.colors.surface }}>
                  <span className="text-white font-semibold text-sm sm:text-base">Edexcel</span>
                </div>
                <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2" style={{ borderColor: currentTheme.colors.primary, backgroundColor: currentTheme.colors.surface }}>
                  <span className="text-white font-semibold text-sm sm:text-base">Cambridge</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
                <a href="#contact" className="text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-2xl hover:scale-105" style={{ backgroundColor: currentTheme.colors.primary }}>
                  Start Learning Today
                </a>
                <a href="#services" className="bg-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg border-2 transition-all hover:scale-105" style={{ color: currentTheme.colors.primary, borderColor: currentTheme.colors.primary }}>
                  Explore Services
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 sm:p-8 rounded-2xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.surface, borderColor: currentTheme.colors.primary }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.primary }}>
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>20+</h3>
                <p className="text-white font-semibold text-sm sm:text-base">Years Experience</p>
              </div>
              <div className="text-center p-8 rounded-2xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.surface, borderColor: currentTheme.colors.primary }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.primary }}>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>500+</h3>
                <p className="text-white font-semibold">Students Taught</p>
              </div>
              <div className="text-center p-8 rounded-2xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.surface, borderColor: currentTheme.colors.primary }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.primary }}>
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>95%</h3>
                <p className="text-white font-semibold">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ backgroundColor: currentTheme.colors.surface }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div className="text-center md:text-left order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Rasika P. Wijesinghe</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                A dedicated mathematics educator with a passion for making complex mathematical concepts accessible and engaging for every student.
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Your Mathematics Teacher</h3>
              <p className="text-gray-300">Rasika P. Wijesinghe</p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4" style={{ borderColor: currentTheme.colors.primary }}>
                <img src={Sir} alt="Rasika P. Wijesinghe" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Classroom Facilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 rounded-xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.background, borderColor: currentTheme.colors.primary }}>
                <img src="https://deepchill.com.au/wp-content/uploads/2025/10/AC-systems-for-crowded-classrooms-3.png" alt="AC Classroom" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4" />
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">AC Classroom</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Comfortable air-conditioned learning environment</p>
              </div>
              <div className="p-4 rounded-xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.background, borderColor: currentTheme.colors.primary }}>
                <img src="https://images.pexels.com/photos/2675061/pexels-photo-2675061.jpeg" alt="Comfortable Seating" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Comfortable Seating</h4>
                <p className="text-gray-300 text-sm">Ergonomic chairs and tables for focused learning</p>
              </div>
              <div className="p-4 rounded-xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.background, borderColor: currentTheme.colors.primary }}>
                <img src="https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg" alt="Friendly Teaching" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Friendly Teaching</h4>
                <p className="text-gray-300 text-sm">Interactive and supportive teaching approach</p>
              </div>
              <div className="p-4 rounded-xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.background, borderColor: currentTheme.colors.primary }}>
                <img src="https://images.pexels.com/photos/8117590/pexels-photo-8117590.jpeg" alt="Past Papers Discussion" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Past Papers & Models</h4>
                <p className="text-gray-300 text-sm">Comprehensive exam preparation materials</p>
              </div>
              <div className="p-4 rounded-xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.background, borderColor: currentTheme.colors.primary }}>
                <img src="https://images.pexels.com/photos/6238020/pexels-photo-6238020.jpeg" alt="Group Classes" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Limited Group Classes</h4>
                <p className="text-gray-300 text-sm">Small groups for collaborative learning</p>
              </div>
              <div className="p-4 rounded-xl border-2 hover:scale-105 transition-all" style={{ backgroundColor: currentTheme.colors.background, borderColor: currentTheme.colors.primary }}>
                <img src="https://images.pexels.com/photos/6325983/pexels-photo-6325983.jpeg" alt="Online Classes" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Online Classes</h4>
                <p className="text-gray-300 text-sm">Virtual learning with interactive tools</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-white border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Comprehensive Curriculum</h3>
              <p className="leading-relaxed text-gray-600">
                Covering all levels from foundational mathematics to advanced calculus and statistics, tailored to individual learning needs.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-white border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Proven Methods</h3>
              <p className="leading-relaxed text-gray-600">
                Using innovative teaching techniques and personalized approaches to ensure every student achieves their full potential.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow bg-white border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Certified Excellence</h3>
              <p className="leading-relaxed text-gray-600">
                Professionally qualified with advanced degrees in mathematics education and a track record of outstanding student results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ background: `linear-gradient(45deg, ${currentTheme.colors.surface} 0%, ${currentTheme.colors.background} 50%, ${currentTheme.colors.surface} 100%)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.text }}>Our Services</h2>
            <p className="text-xl" style={{ color: currentTheme.colors.textSecondary }}>Flexible learning options designed for your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift group bg-white border-2" style={{ borderColor: currentTheme.colors.accent }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: currentTheme.colors.primary }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Individual Tutoring</h3>
              <p className="text-sm mb-3 text-gray-600">One-on-one personalized sessions focused on your specific needs</p>
              <div className="font-semibold text-sm" style={{ color: currentTheme.colors.primary }}>Starting from Rs. 2,500/session</div>
            </div>
            <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift group bg-white border-2" style={{ borderColor: currentTheme.colors.accent }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: currentTheme.colors.primary }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Group Classes</h3>
              <p className="text-sm mb-3 text-gray-600">Small group sessions promoting collaborative learning</p>
              <div className="font-semibold text-sm" style={{ color: currentTheme.colors.primary }}>Starting from Rs. 1,500/session</div>
            </div>
            <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift group bg-white border-2" style={{ borderColor: currentTheme.colors.accent }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: currentTheme.colors.primary }}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Exam Preparation</h3>
              <p className="text-sm mb-3 text-gray-600">Targeted preparation for O/L, A/L, and university entrance exams</p>
              <div className="font-semibold text-sm" style={{ color: currentTheme.colors.primary }}>Starting from Rs. 3,000/session</div>
            </div>
            <div className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift group bg-white border-2" style={{ borderColor: currentTheme.colors.accent }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: currentTheme.colors.primary }}>
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Flexible Scheduling</h3>
              <p className="text-sm mb-3 text-gray-600">Weekend and evening sessions available to fit your schedule</p>
              <div className="font-semibold text-sm" style={{ color: currentTheme.colors.primary }}>7 days a week availability</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.primary}15 0%, ${currentTheme.colors.accent}10 50%, ${currentTheme.colors.surface} 100%)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.text }}>Affordable Pricing Plans</h2>
            <p className="text-xl" style={{ color: currentTheme.colors.textSecondary }}>Choose the perfect plan for your learning journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ backgroundColor: currentTheme.colors.surface, borderColor: currentTheme.colors.border }}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: currentTheme.colors.text }}>Individual</h3>
                <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>Rs. 2,500</div>
                <p style={{ color: currentTheme.colors.textSecondary }}>per session</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>One-on-one tutoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Personalized curriculum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Flexible scheduling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Progress tracking</span>
                </li>
              </ul>
              <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{ backgroundColor: currentTheme.colors.primary }}>
                Choose Plan
              </button>
            </div>
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 relative" style={{ backgroundColor: currentTheme.colors.surface, borderColor: currentTheme.colors.primary }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white px-4 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: currentTheme.colors.primary }}>Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: currentTheme.colors.text }}>Group Class</h3>
                <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>Rs. 1,500</div>
                <p style={{ color: currentTheme.colors.textSecondary }}>per session</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Small group (4-6 students)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Interactive learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Peer collaboration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Regular assessments</span>
                </li>
              </ul>
              <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{ backgroundColor: currentTheme.colors.primary }}>
                Choose Plan
              </button>
            </div>
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ backgroundColor: currentTheme.colors.surface, borderColor: currentTheme.colors.border }}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: currentTheme.colors.text }}>Exam Prep</h3>
                <div className="text-4xl font-bold mb-2" style={{ color: currentTheme.colors.primary }}>Rs. 3,000</div>
                <p style={{ color: currentTheme.colors.textSecondary }}>per session</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Intensive exam focus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Past paper practice</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Exam strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" style={{ color: currentTheme.colors.primary }} />
                  <span style={{ color: currentTheme.colors.textSecondary }}>Mock examinations</span>
                </li>
              </ul>
              <button className="w-full text-white py-3 rounded-lg font-semibold transition-colors" style={{ backgroundColor: currentTheme.colors.primary }}>
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="lms" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ backgroundColor: currentTheme.colors.background }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Learning Management System</h2>
            <p className="text-xl text-gray-300">Access your personalized learning dashboard anytime, anywhere</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Course Materials</h3>
              <p className="text-gray-600 mb-4">Access video lessons, notes, and practice problems organized by topic and difficulty level.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Video tutorials</li>
                <li>• Downloadable notes</li>
                <li>• Practice worksheets</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">Monitor your learning progress with detailed analytics and performance reports.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Performance dashboard</li>
                <li>• Progress reports</li>
                <li>• Skill assessments</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Assignments & Quizzes</h3>
              <p className="text-gray-600 mb-4">Complete assignments and take quizzes with instant feedback and detailed solutions.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Interactive quizzes</li>
                <li>• Homework submissions</li>
                <li>• Instant feedback</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Schedule Management</h3>
              <p className="text-gray-600 mb-4">Book sessions, view upcoming classes, and manage your learning schedule.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Session booking</li>
                <li>• Class calendar</li>
                <li>• Reminder notifications</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Discussion Forum</h3>
              <p className="text-gray-600 mb-4">Connect with fellow students and get help from instructors in our community forum.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Student discussions</li>
                <li>• Q&A with teacher</li>
                <li>• Study groups</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2" style={{ borderColor: currentTheme.colors.primary }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: currentTheme.colors.primary }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Certificates & Badges</h3>
              <p className="text-gray-600 mb-4">Earn certificates and achievement badges as you complete courses and reach milestones.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Course certificates</li>
                <li>• Achievement badges</li>
                <li>• Progress milestones</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="https://69116a10bfa55e9abc3174ae--creative-figolla-8cac91.netlify.app/" className="inline-block bg-white px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:scale-105 shadow-lg" style={{ color: currentTheme.colors.primary, borderColor: currentTheme.colors.primary }}>
              Access LMS Portal
            </a>
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
                <Quote className="w-8 h-8 mr-3" style={{ color: currentTheme.colors.primary }} />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Sir Rasika's teaching method is exceptional. I improved from C to A in just 6 months. His patience and clear explanations made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${currentTheme.colors.accent}20` }}>
                  <span className="font-bold" style={{ color: currentTheme.colors.primary }}>AS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Amara Silva</p>
                  <p className="text-gray-500 text-sm">A/L Mathematics Student</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 mr-3" style={{ color: currentTheme.colors.primary }} />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The group classes were amazing! Learning with peers and Sir Rasika's guidance helped me understand complex calculus concepts easily."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${currentTheme.colors.accent}20` }}>
                  <span className="font-bold" style={{ color: currentTheme.colors.primary }}>NP</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Nimal Perera</p>
                  <p className="text-gray-500 text-sm">University Student</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 mr-3" style={{ color: currentTheme.colors.primary }} />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Thanks to Sir Rasika's exam preparation sessions, I scored 95 marks in O/L Mathematics. His practice papers were incredibly helpful!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${currentTheme.colors.accent}20` }}>
                  <span className="font-bold" style={{ color: currentTheme.colors.primary }}>SD</span>
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

      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ backgroundColor: currentTheme.colors.primary }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Student Success Stories</h2>
            <p className="text-xl text-red-50">Our students consistently achieve outstanding results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">95%</p>
              <p className="text-red-50">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-red-50">Students Taught</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Star className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">4.9/5</p>
              <p className="text-red-50">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">20+</p>
              <p className="text-red-50">Years Experience</p>
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
              <a href="#contact" className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl">
                Claim Free Session
              </a>
              <a href="#pricing" className="bg-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition-colors border-2 border-white/20">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>
      



      


      <section className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in" style={{ backgroundColor: currentTheme.colors.background }}>
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
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-white">+94 77 348 0852</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-red-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white">rasika@mathscapital.lk</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-white">Colombo, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <a href="https://wa.me/94773480852" className="text-white hover:text-green-400 transition-colors">+94 77 348 0852</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: currentTheme.colors.surface, border: `1px solid ${currentTheme.colors.border}` }}>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const level = formData.get('level');
                const message = formData.get('message');
                const whatsappMessage = `Hello! I'm interested in mathematics tutoring.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject Level: ${level}%0AMessage: ${message}`;
                window.open(`https://wa.me/94773480852?text=${whatsappMessage}`, '_blank');
              }}>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.text }}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all"
                    style={{ borderColor: currentTheme.colors.border, backgroundColor: currentTheme.colors.background, color: currentTheme.colors.text }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.text }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all"
                    style={{ borderColor: currentTheme.colors.border, backgroundColor: currentTheme.colors.background, color: currentTheme.colors.text }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>

                  <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.text }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all"
                    style={{ borderColor: currentTheme.colors.border, backgroundColor: currentTheme.colors.background, color: currentTheme.colors.text }}
                    placeholder="+94 77 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject-level" className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.text }}>Subject Level</label>
                  <select id="subject-level" name="level" aria-required="true" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all" style={{ borderColor: currentTheme.colors.border, backgroundColor: currentTheme.colors.background, color: currentTheme.colors.text }}>
                    <option value="">Select your level</option>
                    <option value="ol">O/L Mathematics</option>
                    <option value="al-pure">A/L Pure Mathematics</option>
                    <option value="al-applied">A/L Applied Mathematics</option>
                    <option value="university">University Level</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: currentTheme.colors.text }}>Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent outline-none transition-all"
                    style={{ borderColor: currentTheme.colors.border, backgroundColor: currentTheme.colors.background, color: currentTheme.colors.text }}
                    placeholder="Tell us about your learning goals and current challenges..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  style={{ backgroundColor: currentTheme.colors.primary }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: currentTheme.colors.surface, color: currentTheme.colors.text }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-red-400" />
                <span className="text-xl font-bold">MathsCapital</span>
              </div>
              <p className="text-white text-sm">
                Empowering students to achieve mathematical excellence through expert guidance and personalized instruction.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#about" className="hover:text-red-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-red-400 transition-colors">Services</a></li>
                <li><a href="#achievements" className="hover:text-red-400 transition-colors">Achievements</a></li>
                <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact</a></li>
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
          className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover-lift"
          style={{ backgroundColor: currentTheme.colors.primary }}
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