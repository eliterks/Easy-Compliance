import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Shield, 
  Building2, 
  CheckCircle, 
  FileText, 
  Globe, 
  Zap,
  ArrowRight,
  Play,
  Eye,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  Brain,
  Database,
  Cpu,
  Check,
  X,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Bell,
  Link,
  FileStack,
  AlertCircle,
  Star
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});

  const handleStartJourney = () => {
    navigate('/login');
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleGetRoadmap = () => {
    if (email.trim()) {
      // Store email and navigate to login
      localStorage.setItem('userEmail', email);
      navigate('/login');
    }
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">ComplianceHub</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={handleSignIn}>Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleStartJourney}>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-slate-900 text-white" id="hero" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Startup Compliance,<br />
                <span className="text-green-400">Reinvented.</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Launch faster. Stay compliant. Powered by AI. Trusted by founders.
              </p>
              
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 mb-6"
                onClick={handleGetRoadmap}
              >
                Get My Compliance Roadmap <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-slate-900"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-slate-900"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <span className="text-gray-400 text-sm">500+ founders already using our platform</span>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                {/* Before/After Toggle */}
                <div className="absolute top-4 left-4 z-10 flex bg-slate-700 rounded-lg p-1">
                  <button className="px-3 py-1 bg-red-500 text-white text-xs rounded">Before</button>
                  <button className="px-3 py-1 bg-green-500 text-black text-xs rounded ml-1">After</button>
                </div>

                {/* Dashboard Interface */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-black" />
                      </div>
                      <span className="font-semibold">Smart Compliance</span>
                    </div>
                    <span className="text-xs text-gray-400">Updated 2m ago</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-4">Your Compliance Roadmap</h3>

                  {/* Progress Items */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-sm">Company Registration</span>
                      </div>
                      <span className="text-xs text-green-400 font-medium">Completed</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-sm">GST Registration</span>
                      </div>
                      <span className="text-xs text-green-400 font-medium">Completed</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-sm">PAN/TAN Setup</span>
                      </div>
                      <span className="text-xs text-green-400 font-medium">Completed</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Clock className="h-4 w-4 text-black" />
                        </div>
                        <span className="text-sm">Bank Account</span>
                      </div>
                      <span className="text-xs text-yellow-400 font-medium">In Progress</span>
                    </div>
                  </div>

                  {/* Next Step */}
                  <div className="mt-4 p-3 bg-blue-600 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Next: ESI Registration</span>
                      <button className="text-xs text-blue-200 hover:text-white">View All →</button>
                    </div>
                  </div>

                  {/* Document Stack Visualization */}
                  <div className="absolute -right-8 top-16">
                    <div className="relative">
                      <div className="w-16 h-20 bg-white rounded-lg shadow-lg transform rotate-12 absolute"></div>
                      <div className="w-16 h-20 bg-orange-200 rounded-lg shadow-lg transform rotate-6 absolute top-1"></div>
                      <div className="w-16 h-20 bg-blue-200 rounded-lg shadow-lg absolute top-2"></div>
                      <div className="w-4 h-4 bg-red-500 rounded-full absolute -top-1 -right-1 flex items-center justify-center">
                        <span className="text-xs text-white font-bold">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-slate-800 text-white" id="stats" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`grid gap-8 md:grid-cols-3 text-center transition-all duration-1000 ${
            isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">₹3.17L+</div>
              <div className="text-gray-400">Average compliance cost saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">6-12 months</div>
              <div className="text-gray-400">Setup time reduced to days</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">28,000+</div>
              <div className="text-gray-400">Startups helped since 2022</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders' Lived Experiences Section */}
      <section className="py-20 px-4 bg-gray-50" id="experiences" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.experiences ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Founders' Lived Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from founders who transformed their compliance journey from chaos to clarity
            </p>
          </div>

          <div className={`grid gap-8 md:grid-cols-2 transition-all duration-1000 delay-300 ${
            isVisible.experiences ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Experience 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Priya Sharma</h3>
                  <p className="text-sm text-gray-600">FinTech Startup Founder</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-2">Before: The Compliance Nightmare</h4>
                  <p className="text-red-700 text-sm">
                    "I spent 8 months just getting basic registrations done. Every government office had different requirements, 
                    and I made multiple trips for the same documents. Cost me ₹4.5L in consultant fees alone."
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">After: Streamlined Success</h4>
                  <p className="text-green-700 text-sm">
                    "With Delhi Flow Guide, everything was done in 2 weeks. One dashboard showed me exactly what I needed, 
                    when I needed it. Saved ₹3L+ and months of stress."
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Launched in 2 weeks instead of 8 months</span>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Rahul Gupta</h3>
                  <p className="text-sm text-gray-600">E-commerce Startup Founder</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 mb-2">Before: Lost in Bureaucracy</h4>
                  <p className="text-red-700 text-sm">
                    "I was running between 12 different offices for trade licenses. Each office wanted different documents. 
                    My co-founder quit because we couldn't focus on building the product."
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">After: Focus on What Matters</h4>
                  <p className="text-green-700 text-sm">
                    "The AI roadmap showed me the exact sequence of applications. Everything was automated, 
                    and I could track progress in real-time. Now I spend time building, not running around offices."
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">From 12 office visits to zero</span>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible.experiences ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={handleGetRoadmap}
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Walkthrough Section */}
      <section className="py-20 px-4 bg-white" id="walkthrough" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible.walkthrough ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 relative overflow-hidden">
                <div className="bg-white rounded-lg p-8 text-center relative z-10">
                  <div className="flex justify-start mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Document Upload</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-8 text-white font-semibold">
                  <h3 className="text-2xl mb-2">Documents</h3>
                  <p className="text-lg opacity-90">Securely store all your compliance documents in one place.</p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${
              isVisible.walkthrough ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Walkthrough</h2>
              <p className="text-xl text-gray-600 mb-8">
                Follow these steps to see how our platform simplifies compliance:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Onboarding</h3>
                    <p className="text-gray-600">Sign up in seconds and tell us about your business type and industry.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Sector Selection</h3>
                    <p className="text-gray-600">Choose your industry and get a customized compliance roadmap.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Roadmap Generation</h3>
                    <p className="text-gray-600">AI instantly creates your personalized compliance roadmap with deadlines.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Portal Redirect</h3>
                    <p className="text-gray-600">One-click access to all government portals with direct navigation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 px-4 bg-gray-50" id="features" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="text-purple-600">Powerful</span>{" "}
              <span className="text-blue-600">Features</span>{" "}
              <span className="text-gray-900">for Seamless Compliance</span>
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our platform combines AI, automation, and industry expertise to simplify every step of your 
              regulatory journey.
            </p>
          </div>

          <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 transition-all duration-1000 delay-400 ${
            isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* AI-Generated Roadmaps */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileStack className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">AI-Generated Roadmaps</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Custom compliance checklists tailored to your business type, location, and scale—generated in 
                  minutes using advanced AI.
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center justify-center gap-1 mx-auto">
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Sector-Specific Templates */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Sector-Specific Templates</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Pre-built roadmaps for retail, restaurants, fintech, manufacturing, and more—each with industry-
                  specific requirements.
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center justify-center gap-1 mx-auto">
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* One-Click Portal Integration */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Link className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">One-Click Portal Integration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Direct links to government portals with deep-linking support—no more searching through 
                  dozens of websites.
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center justify-center gap-1 mx-auto">
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Real-Time Status Tracker */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Real-Time Status Tracker</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Monitor your compliance progress with visual indicators and completion percentages across all 
                  requirements.
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center justify-center gap-1 mx-auto">
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Smart Alerts & Reminders */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Smart Alerts & Reminders</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Never miss a deadline with intelligent notifications based on statutory timelines and 
                  your business priorities.
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center justify-center gap-1 mx-auto">
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Document Management */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Document Management</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Securely store, organize, and export compliance documents for audits, investors, or internal 
                  governance reviews.
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center justify-center gap-1 mx-auto">
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Explore All Features Button */}
          <div className={`text-center transition-all duration-1000 delay-600 ${
            isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
              onClick={handleStartJourney}
            >
              Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* India's Startup Bottleneck Section */}
      <section className="py-20 px-4 bg-white" id="bottleneck" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible.bottleneck ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              India's Startup Bottleneck
            </h2>
            <p className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ${
              isVisible.bottleneck ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Regulatory fragmentation is holding back Indian startups. See how we compare globally and 
              why a unified platform is essential.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16 transition-all duration-1000 delay-400 ${
            isVisible.bottleneck ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-2">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">28,000+</CardTitle>
                <p className="text-gray-600 font-medium">Startups shut down (2022-2024)</p>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-2">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">₹3.17 lakh/year</CardTitle>
                <p className="text-gray-600 font-medium">Average compliance cost</p>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-2">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">6-12 months</CardTitle>
                <p className="text-gray-600 font-medium">Setup time in India</p>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader className="pb-2">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">18 minutes</CardTitle>
                <p className="text-gray-600 font-medium">Setup time in Estonia</p>
              </CardHeader>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-600 ${
            isVisible.bottleneck ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="px-6 py-2 bg-white rounded-lg shadow-sm font-medium text-gray-900">
                  Table View
                </button>
                <button className="px-6 py-2 text-gray-600 font-medium">
                  Chart View
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Metric</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">India</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Singapore</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Estonia</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">UAE</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">USA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Setup Time</td>
                    <td className="text-center py-4 px-4">
                      <ArrowUp className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Digital ID</td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Portal Fragmentation</td>
                    <td className="text-center py-4 px-4">
                      <ArrowUp className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <ArrowDown className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">API Integration</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Real-time Updates</td>
                    <td className="text-center py-4 px-4">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Compliance Technology Architecture */}
      <section className="py-20 px-4 bg-slate-800 text-white" id="technology" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              isVisible.technology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Smart Compliance Technology Architecture
            </h2>
            <p className={`text-xl text-slate-300 transition-all duration-1000 delay-200 ${
              isVisible.technology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our three-pillar technology stack streamlines and secures the compliance lifecycle.
            </p>
          </div>

          <div className={`grid gap-8 md:grid-cols-3 transition-all duration-1000 delay-400 ${
            isVisible.technology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-8 w-8 text-green-400" />
                  <CardTitle className="text-xl text-green-400">AI-Powered Compliance Assistant</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Natural Language Processing for statute parsing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Machine Learning for compliance health scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Document Auto-Analysis with OCR pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Regulatory Change Tracking via webhooks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-xl text-blue-400">Unified Startup Dashboard</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>GST API for real-time tax registration status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>PAN API for instant identity verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>UDYAM API for MSME registration lookup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>DigiLocker API for secure document retrieval</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="h-8 w-8 text-purple-400" />
                  <CardTitle className="text-xl text-purple-400">Policy Framework Implementation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Delhi Regulatory Sandbox Launch (0-6 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>API Mandate for All Licensing Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>One-Time KYC Repository with consent-driven access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Smart City Compliance Infrastructure (6-18 months)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision Timeline */}
      <section className="py-20 px-4 bg-slate-900 text-white" id="future" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              isVisible.future ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Future Vision: One-Nation-One-License
            </h2>
            <p className={`text-xl text-slate-300 transition-all duration-1000 delay-200 ${
              isVisible.future ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our long-term roadmap for transforming India's regulatory landscape.
            </p>
          </div>

          <div className={`space-y-16 transition-all duration-1000 delay-400 ${
            isVisible.future ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-400 mb-2">2025</div>
                <h3 className="text-2xl font-bold mb-4">Delhi Regulatory Sandbox</h3>
                <p className="text-slate-300 text-lg">
                  Controlled environment for startups to pilot new compliance tools with fast-tracked 
                  reviews and bi-monthly stakeholder workshops.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-400 mb-2">2026</div>
                <h3 className="text-2xl font-bold mb-4">National API Mandate</h3>
                <p className="text-slate-300 text-lg">
                  Executive directive requiring every department to publish RESTful APIs with 
                  standardized schemas and clear uptime SLAs.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-400 mb-2">2028</div>
                <h3 className="text-2xl font-bold mb-4">Smart City Compliance Infrastructure</h3>
                <p className="text-slate-300 text-lg">
                  IoT sensor networks at industrial clusters to auto-report environmental parameters 
                  directly into blockchain ledgers.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-400 mb-2">2030+</div>
                <h3 className="text-2xl font-bold mb-4">One-Nation-One-License Architecture</h3>
                <p className="text-slate-300 text-lg">
                  Single startup registration valid across all states with harmonized regulatory standards 
                  and cross-border business facilitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800" id="testimonials" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Backed by Data. Trusted by Founders.
            </h2>
            <p className={`text-xl text-slate-300 transition-all duration-1000 delay-200 ${
              isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Hear from early adopters who've transformed their compliance journey.
            </p>
          </div>

          <div className={`grid gap-8 md:grid-cols-3 transition-all duration-1000 delay-400 ${
            isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Priya Sharma</h3>
                    <p className="text-slate-400 text-sm">Fintech Startup, Delhi</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 italic">
                  "What used to take us months now happens in days. The AI roadmap saved us at least ₹5 lakhs in 
                  consultant fees and 4 months of back-and-forth with regulators."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Rajiv Mehta</h3>
                    <p className="text-slate-400 text-sm">Manufacturing MSME, Gurugram</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 italic">
                  "The platform's integration with pollution control board APIs eliminated our need for multiple site 
                  visits. Real-time status updates kept us informed every step of the way."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Aditya Patel</h3>
                    <p className="text-slate-400 text-sm">E-commerce Startup, Noida</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 italic">
                  "The document management system is a game-changer. Our investors were impressed with how 
                  quickly we could produce compliance reports during due diligence."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white" id="final-cta" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
            isVisible['final-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to Simplify Your Startup Journey?
          </h2>
          <p className={`text-xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${
            isVisible['final-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join thousands of founders who are launching faster and staying compliant with our AI-powered platform.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-400 ${
            isVisible['final-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-sm bg-slate-800 border-slate-600 text-white placeholder-slate-400"
            />
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8"
              onClick={handleGetRoadmap}
            >
              Get My Roadmap
            </Button>
          </div>
          
          <p className="text-sm text-slate-400">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-lg font-bold">Smart Compliance</span>
              </div>
              <p className="text-slate-400">
                Simplifying regulatory compliance for Indian startups through AI and integration.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Platform</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Case Studies</li>
                <li>Testimonials</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Blog</li>
                <li>Compliance Guide</li>
                <li>API Documentation</li>
                <li>Support</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Smart Compliance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
