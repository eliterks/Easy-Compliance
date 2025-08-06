import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Book, MessageCircle, Mail, Phone } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Help & Support</h1>
            <p className="text-muted-foreground">Get help with ComplianceHub Delhi</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive guides and tutorials for using ComplianceHub.
              </p>
              <Button variant="outline" className="w-full">
                Browse Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Chat with our support team for immediate assistance.
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Call our support hotline for urgent issues.
              </p>
              <Button variant="outline" className="w-full">
                Call Support
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                FAQ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Find answers to frequently asked questions.
              </p>
              <Button variant="outline" className="w-full">
                View FAQ
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Video Tutorials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Watch step-by-step video guides for common tasks.
              </p>
              <Button variant="outline" className="w-full">
                Watch Videos
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Help Section */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle>Quick Help</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Getting Started</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• How to create your first compliance roadmap</li>
                  <li>• Understanding document requirements</li>
                  <li>• Setting up reminders and alerts</li>
                  <li>• Navigating government portals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Common Issues</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Document upload problems</li>
                  <li>• Portal access issues</li>
                  <li>• Account and billing questions</li>
                  <li>• Technical troubleshooting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
