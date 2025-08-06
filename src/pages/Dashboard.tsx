import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ExternalLink, 
  Upload, 
  FileText,
  Calendar,
  User,
  Building2,
  Download,
  ArrowRight
} from 'lucide-react';
import RoadmapGenerator from '@/components/RoadmapGenerator';
import ComplianceTracker from '@/components/ComplianceTracker';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState<any>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  useEffect(() => {
    // Check if user has an industry selected, if not show generator
    if (user?.industry && !roadmap) {
      setShowGenerator(true);
    }
  }, [user, roadmap]);

  const handleRoadmapGenerated = (generatedRoadmap: any) => {
    setRoadmap(generatedRoadmap);
    setShowGenerator(false);
  };

  const getIndustryName = (industryId: string) => {
    const names = {
      automobile: 'Automobile Retail',
      retail: 'Brick-and-Mortar Shops',
      restaurant: 'Restaurants & Bars'
    };
    return names[industryId as keyof typeof names] || industryId;
  };

  const calculateProgress = () => {
    if (!roadmap?.steps) return 0;
    const completed = roadmap.steps.filter((step: any) => step.status === 'completed').length;
    return Math.round((completed / roadmap.steps.length) * 100);
  };

  const getStatsData = () => {
    if (!roadmap?.steps) return { total: 0, completed: 0, inProgress: 0, notStarted: 0 };
    
    const total = roadmap.steps.length;
    const completed = roadmap.steps.filter((step: any) => step.status === 'completed').length;
    const inProgress = roadmap.steps.filter((step: any) => step.status === 'in-progress').length;
    const notStarted = roadmap.steps.filter((step: any) => step.status === 'not-started').length;
    
    return { total, completed, inProgress, notStarted };
  };

  if (showGenerator) {
    return <RoadmapGenerator onRoadmapGenerated={handleRoadmapGenerated} />;
  }

  const stats = getStatsData();
  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ComplianceHub Delhi
                </h1>
                <p className="text-sm text-muted-foreground">AI-Powered Compliance Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {user?.username}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user?.industry && getIndustryName(user.industry)}
                </p>
              </div>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.total}</p>
                  <p className="text-muted-foreground text-sm">Total Steps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/10 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.completed}</p>
                  <p className="text-muted-foreground text-sm">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.inProgress}</p>
                  <p className="text-muted-foreground text-sm">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-muted rounded-lg">
                  <AlertCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.notStarted}</p>
                  <p className="text-muted-foreground text-sm">Not Started</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Card */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Compliance Progress</CardTitle>
                <CardDescription>
                  Track your progress through the compliance roadmap
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{progress}%</p>
                <p className="text-sm text-muted-foreground">Complete</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="roadmap">Compliance Roadmap</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="reminders">Reminders</TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap">
            {roadmap ? (
              <ComplianceTracker roadmap={roadmap} onRoadmapUpdate={setRoadmap} />
            ) : (
              <Card className="border-0 shadow-soft">
                <CardContent className="p-12 text-center">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Roadmap Generated</h3>
                  <p className="text-muted-foreground mb-6">
                    Generate your personalized compliance roadmap to get started.
                  </p>
                  <Button onClick={() => setShowGenerator(true)} variant="gradient">
                    Generate Roadmap
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="documents">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Document Management</CardTitle>
                    <CardDescription>
                      Upload and manage your compliance documents
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={() => navigate('/documents')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Go to Documents
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-12 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Document Upload</h3>
                <p className="text-muted-foreground mb-6">
                  Upload documents related to your compliance steps for easy tracking.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/documents')}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Documents
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reminders">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Reminders & Alerts</CardTitle>
                    <CardDescription>
                      Manage your compliance deadlines and notifications
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={() => navigate('/reminders')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Go to Reminders
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Active Reminders</h3>
                <p className="text-muted-foreground mb-6">
                  Set up reminders for important compliance deadlines.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/reminders')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Add Reminder
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;