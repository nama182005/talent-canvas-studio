import { useState } from "react";
import { Calendar, MapPin, Link, Trophy, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UserProfileProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    location: string;
    website: string;
    joinedDate: string;
    isFollowing?: boolean;
  };
  stats: {
    posts: number;
    followers: number;
    following: number;
    likes: number;
  };
  skills: string[];
  achievements: Array<{
    title: string;
    description: string;
    icon: string;
    date: string;
  }>;
}

export function UserProfile({ user, stats, skills, achievements }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing || false);
  const [currentTab, setCurrentTab] = useState("posts");

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="w-32 h-32 ring-4 ring-primary/20 ring-offset-4">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-3xl">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="mt-4 text-center md:text-left">
                <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                <p className="text-muted-foreground">@{user.username}</p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 space-y-4">
              <p className="text-foreground leading-relaxed">{user.bio}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {user.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center gap-1">
                    <Link className="h-4 w-4" />
                    <a href={user.website} className="text-primary hover:underline">
                      {user.website}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joinedDate}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:bg-secondary/80 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Follow Button */}
              <Button
                onClick={handleFollow}
                className={
                  isFollowing
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                }
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{stats.posts}</div>
              <div className="text-sm text-muted-foreground">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{stats.followers}</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{stats.following}</div>
              <div className="text-sm text-muted-foreground">Following</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{stats.likes}</div>
              <div className="text-sm text-muted-foreground">Likes</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Content Tabs */}
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
          <TabsTrigger value="posts" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Posts
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Achievements
          </TabsTrigger>
          <TabsTrigger value="liked" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
            Liked
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Post grid placeholder */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="aspect-square bg-muted/50 rounded-lg shadow-card hover:shadow-floating transition-all duration-300 hover-scale">
                <CardContent className="p-0 h-full flex items-center justify-center">
                  <span className="text-muted-foreground">Post {item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="liked" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Liked posts grid placeholder */}
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="aspect-square bg-muted/50 rounded-lg shadow-card hover:shadow-floating transition-all duration-300 hover-scale">
                <CardContent className="p-0 h-full flex items-center justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Heart className="h-5 w-5" />
                    <span>Liked Post {item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}