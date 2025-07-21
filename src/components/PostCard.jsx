import { useState } from "react";
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function PostCard({ user, content, stats, timeAgo }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(user.isFollowing || false);
  const [likesCount, setLikesCount] = useState(stats.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const getCategoryColor = (category) => {
    const colors = {
      art: "bg-peach text-peach-foreground",
      music: "bg-lavender text-lavender-foreground",
      coding: "bg-teal text-teal-foreground",
      design: "bg-primary text-primary-foreground",
      writing: "bg-secondary text-secondary-foreground",
      photography: "bg-accent text-accent-foreground",
    };
    return colors[category.toLowerCase()] || "bg-muted text-muted-foreground";
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-card hover:shadow-floating transition-all duration-300 hover-scale bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="ring-2 ring-primary/20 ring-offset-2">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">{user.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">@{user.username}</span>
                <span className="text-xs text-muted-foreground">• {timeAgo}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!isFollowing && (
              <Button
                size="sm"
                onClick={handleFollow}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                Follow
              </Button>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover/95 backdrop-blur-sm">
                <DropdownMenuItem>Report post</DropdownMenuItem>
                <DropdownMenuItem>Hide post</DropdownMenuItem>
                <DropdownMenuItem>Share profile</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-3">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <Badge
              className={`absolute top-3 left-3 ${getCategoryColor(content.skillCategory)}`}
            >
              {content.skillCategory}
            </Badge>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-foreground">{content.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {content.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {content.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs hover:bg-secondary/80 cursor-pointer transition-colors"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-border/50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`gap-2 transition-colors ${
                isLiked ? "text-red-500 hover:text-red-600" : "hover:text-red-500"
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
              <span className="text-sm font-medium">{likesCount}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">{stats.comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
              <Share className="h-5 w-5" />
              <span className="text-sm font-medium">{stats.shares}</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSaved(!isSaved)}
            className={`hover:text-primary ${
              isSaved ? "text-primary" : ""
            }`}
          >
            <Bookmark className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}