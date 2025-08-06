import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { 
  Home, 
  FolderOpen, 
  CheckSquare, 
  FileText, 
  Calendar,
  Users,
  Settings,
  HelpCircle,
  Shield,
  Building2
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: Building2 },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Task Board', href: '/tasks', icon: CheckSquare },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Reminders', href: '/reminders', icon: Calendar },
];

const secondaryNavigation = [
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help', href: '/help', icon: HelpCircle },
];

interface AppSidebarProps {
  children: React.ReactNode;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar className="border-r">
          <SidebarContent>
            {/* Header */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="font-semibold text-lg">ComplianceHub</h2>
                  <p className="text-xs text-muted-foreground">Delhi Compliance</p>
                </div>
              </div>
            </div>

            {/* Main Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigation.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        onClick={() => navigate(item.href)}
                        isActive={location.pathname === item.href}
                        className="w-full justify-start"
                      >
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Secondary Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel>Other</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {secondaryNavigation.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        onClick={() => navigate(item.href)}
                        isActive={location.pathname === item.href}
                        className="w-full justify-start"
                      >
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Filters */}
            <SidebarGroup>
              <SidebarGroupLabel>Filters</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full justify-start text-sm">
                      • Active
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full justify-start text-sm">
                      • High Priority
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full justify-start text-sm">
                      • In Progress
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b px-4 py-2 flex items-center">
            <SidebarTrigger />
          </header>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppSidebar;
