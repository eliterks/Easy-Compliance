import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Plus } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  avatar: string;
  status: 'todo' | 'in-progress' | 'done';
}

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Design System Updates',
      description: 'Update component library with new design tokens',
      assignee: 'Alice Smith',
      avatar: 'AS',
      status: 'todo'
    },
    {
      id: 2,
      title: 'API Integration',
      description: 'Integrate new backend endpoints',
      assignee: 'Bob Johnson',
      avatar: 'BJ',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'User Testing',
      description: 'Conduct user testing sessions',
      assignee: 'Carol Williams',
      avatar: 'CW',
      status: 'done'
    }
  ]);

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  const getColumnColor = (status: string) => {
    switch (status) {
      case 'todo': return 'bg-gray-50 border-gray-200';
      case 'in-progress': return 'bg-blue-50 border-blue-200';
      case 'done': return 'bg-green-50 border-green-200';
      default: return 'bg-gray-50';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'todo': return <Badge variant="secondary">To Do</Badge>;
      case 'in-progress': return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'done': return <Badge className="bg-green-100 text-green-800">Done</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Board</h1>
            <p className="text-muted-foreground">Manage your team's tasks and workflow</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* To Do Column */}
          <div className={`p-4 rounded-lg border-2 ${getColumnColor('todo')}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">To Do</h3>
              <Badge variant="secondary">{getTasksByStatus('todo').length}</Badge>
            </div>
            <div className="space-y-3">
              {getTasksByStatus('todo').map((task) => (
                <Card key={task.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">{task.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{task.avatar}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{task.assignee}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div className={`p-4 rounded-lg border-2 ${getColumnColor('in-progress')}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-blue-700">In Progress</h3>
              <Badge className="bg-blue-100 text-blue-800">{getTasksByStatus('in-progress').length}</Badge>
            </div>
            <div className="space-y-3">
              {getTasksByStatus('in-progress').map((task) => (
                <Card key={task.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">{task.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{task.avatar}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{task.assignee}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Done Column */}
          <div className={`p-4 rounded-lg border-2 ${getColumnColor('done')}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-green-700">Done</h3>
              <Badge className="bg-green-100 text-green-800">{getTasksByStatus('done').length}</Badge>
            </div>
            <div className="space-y-3">
              {getTasksByStatus('done').map((task) => (
                <Card key={task.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">{task.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">{task.avatar}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{task.assignee}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
