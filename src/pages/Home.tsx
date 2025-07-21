import { PostCard } from "@/components/PostCard";
import { SkillFilter } from "@/components/SkillFilter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const samplePosts = [
  {
    id: "1",
    user: {
      name: "Alexandra Chen",
      username: "alexart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      isFollowing: false,
    },
    content: {
      title: "Digital Portrait Study",
      description: "Exploring light and shadow in digital painting. This piece took me about 6 hours to complete using Procreate on iPad.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      tags: ["digitalart", "portrait", "procreate", "study"],
      skillCategory: "Art",
    },
    stats: {
      likes: 234,
      comments: 18,
      shares: 12,
    },
    timeAgo: "2h",
  },
  {
    id: "2",
    user: {
      name: "Marcus Johnson",
      username: "beatmaker_mj",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      isFollowing: true,
    },
    content: {
      title: "Lofi Hip-Hop Beat",
      description: "Just dropped a new chill beat perfect for studying or relaxing. Made with vintage samples and analog warmth.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["lofi", "hiphop", "beats", "chillmusic"],
      skillCategory: "Music",
    },
    stats: {
      likes: 189,
      comments: 32,
      shares: 28,
    },
    timeAgo: "4h",
  },
  {
    id: "3",
    user: {
      name: "Sarah Kim",
      username: "codewithsarah",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      isFollowing: false,
    },
    content: {
      title: "React Component Library",
      description: "Built a comprehensive UI component library with TypeScript and Storybook. Fully accessible and customizable.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      tags: ["react", "typescript", "storybook", "ui"],
      skillCategory: "Coding",
    },
    stats: {
      likes: 156,
      comments: 24,
      shares: 45,
    },
    timeAgo: "6h",
  },
  {
    id: "4",
    user: {
      name: "David Martinez",
      username: "designdave",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      isFollowing: true,
    },
    content: {
      title: "Brand Identity Design",
      description: "Complete brand identity for a sustainable fashion startup. Logo, color palette, typography, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      tags: ["branding", "logo", "identity", "sustainable"],
      skillCategory: "Design",
    },
    stats: {
      likes: 312,
      comments: 41,
      shares: 67,
    },
    timeAgo: "8h",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = samplePosts.filter((post) => {
    const matchesFilter = activeFilter === "All" || post.content.skillCategory === activeFilter;
    const matchesSearch = searchQuery === "" || 
      post.content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.user.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <SkillFilter
                onFilterChange={setActiveFilter}
                onSearchChange={setSearchQuery}
                activeFilter={activeFilter}
              />
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 md:p-12 text-center">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                    Welcome to SkillSync
                  </h1>
                  <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                    Discover amazing talents, share your skills, and connect with creators from around the world
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Button variant="secondary" size="lg" className="shadow-card">
                      Start Exploring
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      Upload Your Work
                    </Button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
              </div>

              {/* Section Header */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Latest from the Community
                </h2>
                <p className="text-muted-foreground">
                  Fresh creative content from our talented community
                </p>
              </div>

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <div key={post.id} className="animate-fade-in">
                      <PostCard {...post} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground">No posts found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}