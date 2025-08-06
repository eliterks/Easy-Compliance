import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';

const Projects: React.FC = () => {
  const { user } = useAuth();

  const projectsData = [
    {
      id: 1,
      title: 'Website Redesign',
      progress: 75,
      dueDate: '2024-04-15',
      team: ['Alice', 'Bob', 'Carol'],
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      progress: 45,
      dueDate: '2024-05-01',
      team: ['David', 'Eve'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      progress: 90,
      dueDate: '2024-03-30',
      team: ['Frank', 'Grace', 'Henry'],
      status: 'Near Completion'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground">Manage your projects and tasks</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Refresh Dashboard
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-muted-foreground text-sm">Total Projects</p>
                  <p className="text-xs text-muted-foreground">Active projects this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-muted-foreground text-sm">Team Members</p>
                  <p className="text-xs text-muted-foreground">Active contributors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-muted-foreground text-sm">Upcoming Deadlines</p>
                  <p className="text-xs text-muted-foreground">Due this week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">70%</p>
                  <p className="text-muted-foreground text-sm">Completion Rate</p>
                  <p className="text-xs text-muted-foreground">Overall progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Card key={project.id} className="border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant={project.progress > 80 ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Due {project.dueDate}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-xs text-white font-medium"
                      >
                        {member[0]}
                      </div>
                    ))}
                  </div>
                  {project.team.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{project.team.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
