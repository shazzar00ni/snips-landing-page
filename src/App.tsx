import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { 
  Scissors, 
  MessageSquare, 
  Users, 
  Lock, 
  BarChart3, 
  Star, 
  Share2,
  Instagram,
  Facebook,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Heart,
  MessageCircle,
  Bookmark,
  Home,
  CalendarDays,
  UserPlus
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // TODO: Add Supabase integration
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Thanks for joining the waitlist!');
    setEmail('');
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Dribbble, href: '#', label: 'Dribbble' }
  ];

  const timelinePhases = [
    {
      title: "Prep + Tease Phase",
      week: "Week 1-2",
      position: "left"
    },
    {
      title: "Sprint 1",
      week: "Week 3-4",
      position: "left"
    },
    {
      title: "Sprint 2",
      week: "Week 5-6",
      position: "left"
    },
    {
      title: "Community Pulse",
      week: "Week 7-8",
      position: "left"
    },
    {
      title: "Sprint 3",
      week: "Week 9-10",
      position: "left"
    },
    {
      title: "Sprint 5",
      week: "Week 12",
      position: "left"
    }
  ];

  const features = [
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Sprint 1: Snip Reactions & SnipStacks",
      description: "React and organize your favorite code snippets"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Sprint 2: Personalized Feed & Draft Mode",
      description: "Customize your feed and work on drafts"
    },
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: "Sprint 3: Weekly Challenge",
      description: "Participate in weekly coding challenges"
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Sprint 4: Collaboration Mode",
      description: "Work together with other developers"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Sprint 5: Shareable Snip Cards",
      description: "Create beautiful cards for your snippets"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Sprint 6: Badges & Milestones",
      description: "Track your progress and achievements"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Sprint 7: Snip Analytics",
      description: "Gain insights into your code sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Logo and Tagline */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Scissors className="h-24 w-24 text-blue-500" />
            <h1 className="text-7xl font-bold">snips.dev/</h1>
          </div>
          <p className="text-2xl font-light text-gray-300">
            snip. share. build. showcase.
          </p>
        </div>

        {/* Waitlist and Snippet Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Waitlist Box */}
          <div className="bg-[#1A1B23] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Join the waitlist:</h2>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#0A0B14] border-gray-700"
                required
              />
              <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                {isSubmitting ? 'Joining...' : 'Join'}
              </Button>
            </form>
            <div className="mt-8 flex items-center justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Snippet Box */}
          <div className="bg-[#1A1B23] p-8 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Scissors className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-medium text-lg">Sarah Developer</div>
                  <div className="text-gray-400">@sarahdev</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            <div className="bg-[#0D0E17] rounded-lg p-6 mb-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                JavaScript
              </div>
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">createSnippet</span> = {"{"}
                <br />
                {"  "}title: <span className="text-yellow-300">"Hello Snips!"</span>,
                <br />
                {"  "}code: <span className="text-yellow-300">"console.log('🚀')"</span>
                <br />
                {"}"};
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 hover:text-pink-500">
                  <Heart className="h-5 w-5" />
                  <span>24</span>
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500">
                  <MessageCircle className="h-5 w-5" />
                  <span>12</span>
                </button>
              </div>
              <button className="hover:text-yellow-500">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Feature Launch Timeline</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600" />
          <div className="space-y-8">
            {timelinePhases.map((phase, index) => (
              <div key={index} className="relative flex items-center">
                <div className={`flex-1 ${phase.position === 'left' ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="text-blue-400 mb-1">{phase.week}</div>
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                </div>
                <div className="z-10 flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold mb-2 text-center text-blue-500">
          Workflows
        </h2>
        <h3 className="text-4xl font-bold mb-16 text-center text-pink-500">
          that work for you.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1A1B23] p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-800">
        <div className="text-center text-sm text-gray-500">
          © 2025 snips.dev. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;