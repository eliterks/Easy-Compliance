import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, Mail, Settings } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Team Management</h1>
            <p className="text-muted-foreground">Manage your team members and collaborators</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </div>

        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent className="p-12 text-center">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Management Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Collaborate with your team on compliance tasks and share progress updates.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Send Feedback
              </Button>
              <Button>
                <Settings className="mr-2 h-4 w-4" />
                Configure Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;
