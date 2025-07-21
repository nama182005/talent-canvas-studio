import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const skillCategories = [
  { name: "All", color: "bg-muted text-muted-foreground" },
  { name: "Art", color: "bg-peach text-peach-foreground" },
  { name: "Music", color: "bg-lavender text-lavender-foreground" },
  { name: "Coding", color: "bg-teal text-teal-foreground" },
  { name: "Design", color: "bg-primary text-primary-foreground" },
  { name: "Writing", color: "bg-secondary text-secondary-foreground" },
  { name: "Photography", color: "bg-accent text-accent-foreground" },
  { name: "Cooking", color: "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
  { name: "Fitness", color: "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200" },
];

export function SkillFilter({ onFilterChange, onSearchChange, activeFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div className="space-y-6 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-card">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search skills, tags, or creators..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-10 bg-background/80 border-border/50 focus:ring-primary/50"
        />
      </div>

      {/* Filter Header */}
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-semibold text-foreground">Filter by Skill</h3>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <Badge
            key={category.name}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              activeFilter === category.name
                ? `${category.color} shadow-soft ring-2 ring-primary/30`
                : `${category.color} opacity-70 hover:opacity-100`
            }`}
            onClick={() => onFilterChange(category.name)}
          >
            {category.name}
          </Badge>
        ))}
      </div>

      {/* Active Filter Display */}
      {activeFilter !== "All" && (
        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          <span className="text-sm text-muted-foreground">Active filter:</span>
          <Badge className="bg-gradient-primary text-primary-foreground">
            {activeFilter}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onFilterChange("All")}
            className="text-xs hover:text-primary"
          >
            Clear
          </Button>
        </div>
      )}
    </div>
  );
}