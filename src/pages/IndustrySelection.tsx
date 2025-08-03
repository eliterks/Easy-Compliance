import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Store, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface IndustrySelectionProps {
  onIndustrySelected: () => void;
}

const industries = [
  {
    id: 'automobile',
    name: 'Automobile Retail',
    description: 'Car dealerships, auto parts stores, and vehicle service centers',
    icon: Car,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'retail',
    name: 'Brick-and-Mortar Shops',
    description: 'Physical retail stores, boutiques, electronics shops, and general stores',
    icon: Store,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'restaurant',
    name: 'Restaurants & Bars',
    description: 'Food establishments, cafes, bars, and catering services',
    icon: UtensilsCrossed,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

const IndustrySelection: React.FC<IndustrySelectionProps> = ({ onIndustrySelected }) => {
  const { user, setUserIndustry } = useAuth();

  const handleIndustrySelect = (industryId: string) => {
    setUserIndustry(industryId);
    onIndustrySelected();
  };

  return (
    <div className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome, {user?.username}!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            To create your personalized compliance roadmap, please select the industry your startup operates in:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card 
                key={industry.id} 
                className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-glow hover:scale-105 border-0 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className={`${industry.bgColor} transition-colors duration-300 group-hover:bg-opacity-80`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-white shadow-soft`}>
                      <IconComponent className={`h-6 w-6 ${industry.color}`} />
                    </div>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="mb-6 text-sm">
                    {industry.description}
                  </CardDescription>
                  <Button 
                    onClick={() => handleIndustrySelect(industry.id)}
                    className="w-full group"
                    variant="gradient"
                  >
                    Select Industry
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't see your industry? We're constantly adding new sectors.{' '}
            <span className="text-primary font-medium cursor-pointer hover:underline">
              Contact support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrySelection;