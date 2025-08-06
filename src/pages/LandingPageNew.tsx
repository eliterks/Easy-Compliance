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
  ArrowDown
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
      <section className="py-20 px-4" id="hero" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              3-Min Setup. 1 Dashboard. 100+ Licenses Managed.
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Navigate <span className="text-blue-600">Startup Compliance</span><br />
            <span className="text-green-600">with Confidence</span>
          </h1>
          
          <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Streamline your regulatory journey with our intuitive dashboard. Track 
            compliance status, access government portals, and manage documents—all 
            in one trusted platform.
          </p>
          
          <div className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={handleStartJourney}>
              <Play className="mr-2 h-5 w-5" />
              Start Your Compliance Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-6 py-3">
              <Eye className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Government Approved
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              Bank-Grade Security
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-600" />
              24/7 Support
            </div>
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

      {/* India's Startup Bottleneck Section */}
      <section className="py-20 px-4 bg-gray-50" id="bottleneck" data-animate>
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
