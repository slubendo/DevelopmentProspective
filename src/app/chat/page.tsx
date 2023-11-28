import { ChatWindow } from "@/app/components/ChatWindow";

export default function AgentsPage() {

  const InfoCard = (
    <div className="p-4 md:p-8 rounded w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Prospective ChatBot
      </h1>
      <p>
        Searching for scholarships can be daunting, but our AI chatbot streamlines the process by offering tailored recommendations based on a user&apos;s profile, academic history, and preferences. Using advanced algorithms and web scraping, our chatbot clears the path to your dream education.
      </p>
    </div>
  );

  return (
    <ChatWindow
      endpoint="chat-agents"
      emptyStateComponent={InfoCard}
      placeholder="Hello there! Ask me about scholarships."
      showIntermediateStepsToggle={false}
    ></ChatWindow>
  );
}
