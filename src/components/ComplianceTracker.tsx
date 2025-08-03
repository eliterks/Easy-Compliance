import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ExternalLink, 
  Upload, 
  FileText,
  Calendar,
  Edit3,
  Download,
  Info
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ComplianceTrackerProps {
  roadmap: any;
  onRoadmapUpdate: (updatedRoadmap: any) => void;
}

const ComplianceTracker: React.FC<ComplianceTrackerProps> = ({ roadmap, onRoadmapUpdate }) => {
  const { toast } = useToast();
  const [editingStep, setEditingStep] = useState<number | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [filter, setFilter] = useState('all');

  const updateStepStatus = (stepId: number, newStatus: string) => {
    const updatedSteps = roadmap.steps.map((step: any) => {
      if (step.id === stepId) {
        const updatedStep = { 
          ...step, 
          status: newStatus,
          completedDate: newStatus === 'completed' ? new Date().toISOString() : null
        };
        return updatedStep;
      }
      return step;
    });

    const completedCount = updatedSteps.filter((step: any) => step.status === 'completed').length;
    const progress = Math.round((completedCount / updatedSteps.length) * 100);

    const updatedRoadmap = {
      ...roadmap,
      steps: updatedSteps,
      completedSteps: completedCount,
      progress
    };

    onRoadmapUpdate(updatedRoadmap);

    toast({
      title: "Status Updated",
      description: `Step marked as ${newStatus.replace('-', ' ')}.`,
    });
  };

  const updateStepNotes = (stepId: number, notes: string) => {
    const updatedSteps = roadmap.steps.map((step: any) => {
      if (step.id === stepId) {
        return { ...step, notes };
      }
      return step;
    });

    const updatedRoadmap = { ...roadmap, steps: updatedSteps };
    onRoadmapUpdate(updatedRoadmap);
    setEditingStep(null);
    setEditNotes('');

    toast({
      title: "Notes Updated",
      description: "Step notes have been saved.",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-warning" />;
      default:
        return <AlertCircle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-success text-success-foreground">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="default" className="bg-warning text-warning-foreground">In Progress</Badge>;
      default:
        return <Badge variant="outline">Not Started</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      default:
        return 'border-l-blue-500';
    }
  };

  const filteredSteps = roadmap.steps.filter((step: any) => {
    if (filter === 'all') return true;
    return step.status === filter;
  });

  const handleFileUpload = (stepId: number) => {
    // Simulate file upload
    toast({
      title: "Document Upload",
      description: "Document upload functionality will be implemented soon.",
    });
  };

  const exportRoadmap = () => {
    const exportData = {
      roadmap: roadmap.industryName,
      generatedAt: new Date().toLocaleString(),
      businessProfile: roadmap.businessProfile,
      steps: roadmap.steps.map((step: any) => ({
        title: step.title,
        status: step.status,
        timeline: step.timeline,
        fee: step.fee,
        authority: step.authority,
        notes: step.notes || 'No notes'
      })),
      summary: {
        totalSteps: roadmap.totalSteps,
        completedSteps: roadmap.completedSteps,
        progress: roadmap.progress + '%'
      }
    };

    // Create downloadable content
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `compliance-roadmap-${Date.now()}.json`;
    link.click();

    toast({
      title: "Export Complete",
      description: "Your compliance roadmap has been exported successfully.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex items-center gap-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Steps</SelectItem>
              <SelectItem value="not-started">Not Started</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            {filteredSteps.length} of {roadmap.steps.length} steps
          </span>
        </div>
        
        <Button onClick={exportRoadmap} variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Roadmap
        </Button>
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        {filteredSteps.map((step: any, index: number) => (
          <Card 
            key={step.id} 
            className={`border-0 shadow-soft border-l-4 ${getPriorityColor(step.priority)} transition-all duration-300 hover:shadow-glow`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {getStatusIcon(step.status)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      {getStatusBadge(step.status)}
                    </div>
                    <CardDescription className="text-sm">
                      {step.description}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Step Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Timeline:</span>
                  <span>{step.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Fee:</span>
                  <span>{step.fee}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Authority:</span>
                  <span>{step.authority}</span>
                </div>
              </div>

              {/* Status Controls */}
              <div className="flex flex-wrap gap-3">
                <Select 
                  value={step.status} 
                  onValueChange={(value) => updateStepStatus(step.id, value)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-started">Not Started</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleFileUpload(step.id)}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Doc
                </Button>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setEditingStep(step.id);
                    setEditNotes(step.notes || '');
                  }}
                >
                  <Edit3 className="mr-2 h-4 w-4" />
                  Add Notes
                </Button>

                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <a href={step.portal} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Go to Portal
                  </a>
                </Button>
              </div>

              {/* Notes Section */}
              {editingStep === step.id ? (
                <div className="space-y-3">
                  <Textarea 
                    placeholder="Add notes about this step..."
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    className="min-h-20"
                  />
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => updateStepNotes(step.id, editNotes)}
                    >
                      Save Notes
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        setEditingStep(null);
                        setEditNotes('');
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : step.notes ? (
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-medium mb-1">Notes:</p>
                  <p className="text-sm text-muted-foreground">{step.notes}</p>
                </div>
              ) : null}

              {/* Completion Date */}
              {step.completedDate && (
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Completed on {new Date(step.completedDate).toLocaleDateString()}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSteps.length === 0 && (
        <Card className="border-0 shadow-soft">
          <CardContent className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Steps Found</h3>
            <p className="text-muted-foreground">
              No compliance steps match the current filter.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ComplianceTracker;