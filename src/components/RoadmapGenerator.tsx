import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles, Users, DollarSign, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RoadmapGeneratorProps {
  onRoadmapGenerated: (roadmap: any) => void;
}

// Template roadmaps for different industries
const roadmapTemplates = {
  automobile: [
    { id: 1, title: 'GST Registration', description: 'Register for Goods and Services Tax', timeline: '7-15 days', fee: '₹0', authority: 'GST Council', portal: 'https://www.gst.gov.in' },
    { id: 2, title: 'Motor Vehicle Dealer License', description: 'Obtain license to sell motor vehicles', timeline: '30-45 days', fee: '₹10,000-50,000', authority: 'Transport Department', portal: 'https://parivahan.gov.in' },
    { id: 3, title: 'Pollution Control Clearance', description: 'Environmental clearance for automobile business', timeline: '30-60 days', fee: '₹5,000-25,000', authority: 'Delhi Pollution Control Committee', portal: 'https://dpcc.delhigovt.nic.in' },
    { id: 4, title: 'Shop & Establishment License', description: 'License for commercial establishment', timeline: '15-30 days', fee: '₹2,000-10,000', authority: 'Labour Department', portal: 'https://edistrict.delhigovt.nic.in' },
    { id: 5, title: 'Fire NOC', description: 'Fire safety clearance certificate', timeline: '15-30 days', fee: '₹1,000-5,000', authority: 'Delhi Fire Service', portal: 'https://dfs.delhigovt.nic.in' },
  ],
  retail: [
    { id: 1, title: 'GST Registration', description: 'Register for Goods and Services Tax', timeline: '7-15 days', fee: '₹0', authority: 'GST Council', portal: 'https://www.gst.gov.in' },
    { id: 2, title: 'Shop & Establishment License', description: 'License for commercial establishment', timeline: '15-30 days', fee: '₹2,000-10,000', authority: 'Labour Department', portal: 'https://edistrict.delhigovt.nic.in' },
    { id: 3, title: 'Trade License', description: 'Municipal trade license for business operations', timeline: '30-45 days', fee: '₹5,000-20,000', authority: 'Municipal Corporation', portal: 'https://mcdonline.nic.in' },
    { id: 4, title: 'Fire NOC', description: 'Fire safety clearance certificate', timeline: '15-30 days', fee: '₹1,000-5,000', authority: 'Delhi Fire Service', portal: 'https://dfs.delhigovt.nic.in' },
    { id: 5, title: 'MSME Registration', description: 'Micro, Small & Medium Enterprise registration', timeline: '7-15 days', fee: '₹0', authority: 'MSME Ministry', portal: 'https://udyamregistration.gov.in' },
  ],
  restaurant: [
    { id: 1, title: 'GST Registration', description: 'Register for Goods and Services Tax', timeline: '7-15 days', fee: '₹0', authority: 'GST Council', portal: 'https://www.gst.gov.in' },
    { id: 2, title: 'FSSAI License', description: 'Food Safety and Standards Authority license', timeline: '30-60 days', fee: '₹7,500-25,000', authority: 'FSSAI', portal: 'https://www.fssai.gov.in' },
    { id: 3, title: 'Fire NOC', description: 'Fire safety clearance certificate', timeline: '15-30 days', fee: '₹1,000-5,000', authority: 'Delhi Fire Service', portal: 'https://dfs.delhigovt.nic.in' },
    { id: 4, title: 'Shop & Establishment License', description: 'License for commercial establishment', timeline: '15-30 days', fee: '₹2,000-10,000', authority: 'Labour Department', portal: 'https://edistrict.delhigovt.nic.in' },
    { id: 5, title: 'Trade License', description: 'Municipal trade license for business operations', timeline: '30-45 days', fee: '₹5,000-20,000', authority: 'Municipal Corporation', portal: 'https://mcdonline.nic.in' },
    { id: 6, title: 'Liquor License', description: 'License to serve alcoholic beverages', timeline: '60-90 days', fee: '₹1,00,000-5,00,000', authority: 'Excise Department', portal: 'https://excise.delhigovt.nic.in' },
  ],
};

const RoadmapGenerator: React.FC<RoadmapGeneratorProps> = ({ onRoadmapGenerated }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    employees: '',
    revenue: '',
    locations: ''
  });

  const getIndustryName = (industryId: string) => {
    const names = {
      automobile: 'Automobile Retail',
      retail: 'Brick-and-Mortar Shops',
      restaurant: 'Restaurants & Bars'
    };
    return names[industryId as keyof typeof names] || industryId;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const customizeRoadmap = (baseSteps: any[], formData: any) => {
    let customizedSteps = [...baseSteps];

    // Add MSME registration for smaller businesses
    if (parseInt(formData.employees) <= 10 && parseInt(formData.revenue) <= 5000000) {
      const msmeStep = {
        id: 100,
        title: 'MSME Registration',
        description: 'Micro, Small & Medium Enterprise registration for benefits',
        timeline: '7-15 days',
        fee: '₹0',
        authority: 'MSME Ministry',
        portal: 'https://udyamregistration.gov.in'
      };
      if (!customizedSteps.find(step => step.title === 'MSME Registration')) {
        customizedSteps.push(msmeStep);
      }
    }

    // Add multi-location compliance for businesses with multiple locations
    if (parseInt(formData.locations) > 1) {
      const multiLocationStep = {
        id: 101,
        title: 'Multi-Location Compliance',
        description: 'Additional permits required for multiple business locations',
        timeline: '30-45 days',
        fee: '₹10,000-50,000',
        authority: 'Municipal Corporation',
        portal: 'https://mcdonline.nic.in'
      };
      customizedSteps.push(multiLocationStep);
    }

    // Remove liquor license for restaurants not serving alcohol
    if (user?.industry === 'restaurant' && formData.revenue && parseInt(formData.revenue) < 2000000) {
      customizedSteps = customizedSteps.filter(step => step.title !== 'Liquor License');
    }

    // Add status and other tracking fields
    return customizedSteps.map(step => ({
      ...step,
      status: 'not-started',
      priority: step.title === 'GST Registration' ? 'high' : 'medium',
      documents: [],
      notes: '',
      dueDate: null,
      completedDate: null
    }));
  };

  const handleGenerate = async () => {
    if (!formData.employees || !formData.revenue || !formData.locations) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate your roadmap.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    const industryKey = user?.industry as keyof typeof roadmapTemplates;
    const baseSteps = roadmapTemplates[industryKey] || [];
    const customizedSteps = customizeRoadmap(baseSteps, formData);

    const roadmap = {
      id: Date.now(),
      industry: user?.industry,
      industryName: getIndustryName(user?.industry || ''),
      steps: customizedSteps,
      createdAt: new Date().toISOString(),
      businessProfile: formData,
      totalSteps: customizedSteps.length,
      completedSteps: 0,
      progress: 0
    };

    setIsGenerating(false);
    
    toast({
      title: "Roadmap Generated!",
      description: `Your personalized compliance roadmap with ${customizedSteps.length} steps is ready.`,
    });

    onRoadmapGenerated(roadmap);
  };

  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            AI Roadmap Generator
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's create your personalized compliance roadmap for{' '}
            <span className="font-semibold text-primary">
              {getIndustryName(user?.industry || '')}
            </span>
          </p>
        </div>

        <Card className="border-0 shadow-glow">
          <CardHeader>
            <CardTitle>Business Profile</CardTitle>
            <CardDescription>
              Answer a few questions to customize your compliance roadmap
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="employees" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                How many employees do you plan to have?
              </Label>
              <Select onValueChange={(value) => handleInputChange('employees', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employee count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1-5 employees</SelectItem>
                  <SelectItem value="6">6-10 employees</SelectItem>
                  <SelectItem value="11">11-20 employees</SelectItem>
                  <SelectItem value="21">21-50 employees</SelectItem>
                  <SelectItem value="51">50+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                What is your expected annual revenue?
              </Label>
              <Select onValueChange={(value) => handleInputChange('revenue', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500000">Under ₹5 Lakhs</SelectItem>
                  <SelectItem value="2000000">₹5-20 Lakhs</SelectItem>
                  <SelectItem value="5000000">₹20-50 Lakhs</SelectItem>
                  <SelectItem value="10000000">₹50 Lakhs - ₹1 Crore</SelectItem>
                  <SelectItem value="20000000">Above ₹1 Crore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="locations" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Do you operate in more than one location?
              </Label>
              <Select onValueChange={(value) => handleInputChange('locations', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Single location</SelectItem>
                  <SelectItem value="2">2-3 locations</SelectItem>
                  <SelectItem value="4">4-5 locations</SelectItem>
                  <SelectItem value="6">5+ locations</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleGenerate}
              className="w-full"
              variant="gradient"
              size="lg"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Your Roadmap...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate AI-Powered Roadmap
                </>
              )}
            </Button>

            {isGenerating && (
              <div className="text-center space-y-2 animate-pulse">
                <p className="text-sm text-muted-foreground">
                  🤖 AI is analyzing your business profile...
                </p>
                <p className="text-sm text-muted-foreground">
                  📋 Customizing compliance requirements...
                </p>
                <p className="text-sm text-muted-foreground">
                  ⚡ Optimizing your roadmap...
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoadmapGenerator;