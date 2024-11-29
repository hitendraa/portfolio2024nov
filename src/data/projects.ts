import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Apple Clone with Three.js",
    description: "A stunning clone of Apple's website using Three.js, featuring 3D models, animations, and interactive elements. Demonstrates advanced web development and 3D visualization skills.",
    tech: ["Three.js", "React", "GSAP", "WebGL"],
    image: "/apple.gif",
    github: "https://github.com/hitendraa/Apple_Website",
    live: "https://apple-website-liard.vercel.app/",
    gradient: "from-purple-500 to-pink-500",
    category: "3D Web"
  },
  {
    title: "Chat with PDF",
    description: "AI-powered PDF chat application that allows users to have interactive conversations with their documents. Uses advanced NLP and machine learning techniques.",
    tech: ["Next.js", "OpenAI", "Python", "LangChain"],
    image: "/chat-with-pdf.png",
    github: "https://github.com/hitendraa/chat-with-pdf",
    live: "https://chat-with-pdf-challenge-mocha.vercel.app/",
    gradient: "from-blue-500 to-cyan-500",
    category: "AI/ML"
  },
  {
    title: "Movie Recommendation System",
    description: "Intelligent movie recommendation engine using cosine similarity and TMDB API. Provides personalized movie suggestions based on user preferences.",
    tech: ["Python", "Scikit-learn", "TMDB API", "Pandas"],
    image: "/movie-reco.png",
    github: "https://github.com/hitendraa/movie-recommendation-system",
    live: "https://github.com/hitendraa/movie-recommendation-system",
    gradient: "from-green-500 to-emerald-500",
    category: "Machine Learning"
  }
];
