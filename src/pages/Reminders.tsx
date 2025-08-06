import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  Bell, 
  Clock, 
  Plus, 
  Edit3, 
  Trash2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Reminder {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  status: 'active' | 'completed' | 'overdue';
  type: 'deadline' | 'task' | 'meeting' | 'document';
}

const Reminders: React.FC = () => {
  const { toast } = useToast();
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: 'GST Return Filing',
      description: 'Submit monthly GST return for March 2024',
      dueDate: '2024-04-20',
      priority: 'high',
      category: 'Tax Compliance',
      status: 'active',
      type: 'deadline'
    },
    {
      id: 2,
      title: 'Trade License Renewal',
      description: 'Renew trade license before expiration',
      dueDate: '2024-05-15',
      priority: 'medium',
      category: 'Licensing',
      status: 'active',
      type: 'deadline'
    },
    {
      id: 3,
      title: 'Fire Safety Inspection',
      description: 'Schedule annual fire safety inspection',
      dueDate: '2024-03-30',
      priority: 'high',
      category: 'Safety Compliance',
      status: 'overdue',
      type: 'task'
    },
    {
      id: 4,
      title: 'Upload Financial Statements',
      description: 'Submit quarterly financial statements',
      dueDate: '2024-04-10',
      priority: 'medium',
      category: 'Financial Reporting',
      status: 'completed',
      type: 'document'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    category: '',
    type: 'deadline' as 'deadline' | 'task' | 'meeting' | 'document'
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'deadline': return <AlertCircle className="h-4 w-4" />;
      case 'task': return <CheckCircle2 className="h-4 w-4" />;
      case 'meeting': return <Calendar className="h-4 w-4" />;
      case 'document': return <Clock className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return `${Math.abs(diffDays)} days overdue`;
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';
    return `${diffDays} days remaining`;
  };

  const handleAddReminder = () => {
    if (!newReminder.title || !newReminder.dueDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const reminder: Reminder = {
      id: reminders.length + 1,
      ...newReminder,
      status: 'active'
    };

    setReminders(prev => [...prev, reminder]);
    setNewReminder({
      title: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      category: '',
      type: 'deadline'
    });
    setShowAddForm(false);

    toast({
      title: "Reminder added",
      description: "Your reminder has been successfully created.",
    });
  };

  const handleStatusUpdate = (id: number, newStatus: 'active' | 'completed' | 'overdue') => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id ? { ...reminder, status: newStatus } : reminder
      )
    );

    toast({
      title: "Status updated",
      description: "Reminder status has been updated.",
    });
  };

  const handleDelete = (id: number) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
    toast({
      title: "Reminder deleted",
      description: "The reminder has been removed.",
      variant: "destructive"
    });
  };

  const activeReminders = reminders.filter(r => r.status === 'active');
  const overdueReminders = reminders.filter(r => r.status === 'overdue');
  const completedReminders = reminders.filter(r => r.status === 'completed');

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reminders & Alerts</h1>
            <p className="text-muted-foreground">Manage your compliance deadlines and notifications</p>
          </div>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Reminder
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{activeReminders.length}</p>
                  <p className="text-muted-foreground text-sm">Active Reminders</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{overdueReminders.length}</p>
                  <p className="text-muted-foreground text-sm">Overdue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{completedReminders.length}</p>
                  <p className="text-muted-foreground text-sm">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {reminders.filter(r => {
                      const dueDate = new Date(r.dueDate);
                      const today = new Date();
                      const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                      return diffDays <= 7 && diffDays >= 0;
                    }).length}
                  </p>
                  <p className="text-muted-foreground text-sm">Due This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Reminder Form */}
        {showAddForm && (
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle>Add New Reminder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={newReminder.title}
                    onChange={(e) => setNewReminder(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter reminder title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date *</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newReminder.dueDate}
                    onChange={(e) => setNewReminder(prev => ({ ...prev, dueDate: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newReminder.description}
                  onChange={(e) => setNewReminder(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter reminder description"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={newReminder.priority} onValueChange={(value: 'low' | 'medium' | 'high') => setNewReminder(prev => ({ ...prev, priority: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={newReminder.type} onValueChange={(value: 'deadline' | 'task' | 'meeting' | 'document') => setNewReminder(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deadline">Deadline</SelectItem>
                      <SelectItem value="task">Task</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="document">Document</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={newReminder.category}
                    onChange={(e) => setNewReminder(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="e.g., Tax Compliance"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleAddReminder} className="bg-blue-600 hover:bg-blue-700">
                  Add Reminder
                </Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reminders List */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle>All Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reminders.map((reminder) => (
                <div key={reminder.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getTypeIcon(reminder.type)}
                        <h4 className="font-medium">{reminder.title}</h4>
                        <Badge className={getPriorityColor(reminder.priority)}>
                          {reminder.priority.charAt(0).toUpperCase() + reminder.priority.slice(1)}
                        </Badge>
                        <Badge className={getStatusColor(reminder.status)}>
                          {reminder.status.charAt(0).toUpperCase() + reminder.status.slice(1)}
                        </Badge>
                      </div>
                      
                      {reminder.description && (
                        <p className="text-sm text-muted-foreground mb-2">{reminder.description}</p>
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due: {reminder.dueDate}
                        </span>
                        <span>•</span>
                        <span>{getDaysUntilDue(reminder.dueDate)}</span>
                        <span>•</span>
                        <span>{reminder.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {reminder.status === 'active' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleStatusUpdate(reminder.id, 'completed')}
                          className="text-green-600 hover:text-green-700"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(reminder.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reminders;
