import { Timer } from "@/components/Timer";
import { TodoList } from "@/components/TodoList";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProductivityQuote } from "@/components/ProductivityQuote";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-8 theme-transition">
      <div className="fixed top-4 right-8">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        <h1 className="text-5xl pt-16 pb-6 sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-2 font-mono text-center">
          PomoSense
        </h1>
        <ProductivityQuote />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8">
          <Timer />
          <TodoList />
        </div>
        <footer className="w-full p-6 text-center text-sm text-gray-600 dark:text-gray-400 font-mono mt-auto">
          Made with ❤️ By Rithvik
        </footer>
      </div>
    </div>
  );
}
