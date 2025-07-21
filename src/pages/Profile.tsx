import { UserProfile } from "@/components/UserProfile";

const currentUser = {
  name: "Alex Rivera",
  username: "alexrivera",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  bio: "Full-stack developer and digital artist passionate about creating beautiful, functional experiences. Love combining code with creativity to build things that matter.",
  location: "San Francisco, CA",
  website: "https://alexrivera.dev",
  joinedDate: "March 2022",
};

const userStats = {
  posts: 47,
  followers: 2340,
  following: 189,
  likes: 5672,
};

const userSkills = [
  "React", "TypeScript", "Node.js", "Digital Art", "UI/UX Design", 
  "Three.js", "Python", "Figma", "Blender", "Photography"
];

const userAchievements = [
  {
    title: "Rising Star",
    description: "Gained 1000 followers in your first month",
    icon: "⭐",
    date: "April 2022",
  },
  {
    title: "Code Master",
    description: "Published 10 coding projects with high engagement",
    icon: "💻",
    date: "June 2022",
  },
  {
    title: "Community Builder",
    description: "Helped 100+ developers through comments and feedback",
    icon: "🤝",
    date: "August 2022",
  },
  {
    title: "Creative Fusion",
    description: "Successfully combined art and technology in projects",
    icon: "🎨",
    date: "October 2022",
  },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto p-6">
        <UserProfile
          user={currentUser}
          stats={userStats}
          skills={userSkills}
          achievements={userAchievements}
        />
      </div>
    </div>
  );
}