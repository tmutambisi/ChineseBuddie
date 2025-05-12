import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import MobileLayout from "@/components/MobileLayout";

// Pages
import Index from "./pages/Index";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import Exercises from "./pages/Exercises";
import Characters from "./pages/Characters";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import ChapterDetail from "./pages/ChapterDetail";
import NotFound from "./pages/NotFound";
import HKSBooks from "./components/HKSBooks";
import Feedback from "./pages/Feedback";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MobileLayout>
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lesson/:id" element={<LessonDetail />} />
              <Route path="/exercises/:id" element={<Exercises />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/hks-books" element={<HKSBooks />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/book/:bookId/chapter/:chapterId" element={<ChapterDetail />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MobileLayout>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
