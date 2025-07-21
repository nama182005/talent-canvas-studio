import { useState } from "react";
import { SkillFilter } from "@/components/SkillFilter";
import { PostCard } from "@/components/PostCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Star } from "lucide-react";

const trendingSkills = [
  { name: "AI Art", posts: 1234, growth: "+25%" },
  { name: "Web3 Design", posts: 892, growth: "+18%" },
  { name: "Lo-fi Music", posts: 756, growth: "+12%" },
  { name: "3D Modeling", posts: 645, growth: "+8%" },
  { name: "Creative Writing", posts: 543, growth: "+15%" },
];

const featuredCreators = [
  {
    name: "Emma Wilson",
    username: "emmacreates",
    followers: "12.5K",
    skills: ["Digital Art", "Animation"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jake Thompson",
    username: "jakecodes",
    followers: "8.2K",
    skills: ["React", "Node.js"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Luna Rodriguez",
    username: "lunamusic",
    followers: "15.8K",
    skills: ["Music Production", "Vocals"],
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
  },
];

const sampleExplorePosts = [
  {
    id: "5",
    user: {
      name: "Emma Wilson",
      username: "emmacreates",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    content: {
      title: "3D Character Animation",
      description: "Character rig and animation for an indie game project. Created in Blender with custom armature setup.",
      image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop",
      tags: ["3d", "animation", "blender", "gamedev"],
      skillCategory: "Art",
    },
    stats: { likes: 445, comments: 67, shares: 34 },
    timeAgo: "1d",
  },
  {
    id: "6",
    user: {
      name: "Luna Rodriguez",
      username: "lunamusic",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    },
    content: {
      title: "Acoustic Cover Session",
      description: "Intimate acoustic version of popular songs recorded in my home studio. Raw vocals and guitar.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["acoustic", "cover", "vocals", "guitar"],
      skillCategory: "Music",
    },
    stats: { likes: 678, comments: 89, shares: 123 },
    timeAgo: "2d",
  },
];

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Explore Skills & Creators
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover trending skills, find inspiring creators, and explore diverse talents from our global community
            </p>
          </div>

          {/* Filter Section */}
          <div className="max-w-4xl mx-auto">
            <SkillFilter
              onFilterChange={setActiveFilter}
              onSearchChange={setSearchQuery}
              activeFilter={activeFilter}
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Trending & Featured */}
            <div className="space-y-6">
              {/* Trending Skills */}
              <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Trending Skills</h2>
                  </div>
                  <div className="space-y-3">
                    {trendingSkills.map((skill, index) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-muted-foreground">
                            #{index + 1}
                          </span>
                          <div>
                            <p className="font-medium text-foreground">{skill.name}</p>
                            <p className="text-xs text-muted-foreground">{skill.posts} posts</p>
                          </div>
                        </div>
                        <Badge className="bg-teal text-teal-foreground">
                          {skill.growth}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Creators */}
              <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Featured Creators</h2>
                  </div>
                  <div className="space-y-4">
                    {featuredCreators.map((creator) => (
                      <div key={creator.username} className="flex items-center gap-3">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{creator.name}</p>
                          <p className="text-xs text-muted-foreground">@{creator.username}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Users className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{creator.followers}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {creator.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Posts Feed */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">
                    {activeFilter === "All" ? "Featured Posts" : `${activeFilter} Posts`}
                  </h2>
                  <Badge className="bg-gradient-accent text-accent-foreground">
                    {sampleExplorePosts.length} posts
                  </Badge>
                </div>

                <div className="grid gap-6">
                  {sampleExplorePosts.map((post) => (
                    <div key={post.id} className="animate-fade-in">
                      <PostCard {...post} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}