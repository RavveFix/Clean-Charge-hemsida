
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Zap, Loader2, Sparkles, User, ExternalLink } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { Chat } from '@google/genai';

interface Source {
  title: string;
  uri: string;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: Source[];
}

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hej! Jag är Clean Charge AI. Vad kan jag hjälpa dig med idag gällande laddboxar eller installation?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initialize chat session on mount
    chatSessionRef.current = createChatSession();
  }, []);

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      // Focus input when chat opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chatSessionRef.current || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: userMessage });
      const responseText = result.text || "Jag ber om ursäkt, jag kunde inte generera ett svar just nu.";
      
      // Extract grounding sources from the response
      const sources: Source[] = result.candidates?.[0]?.groundingMetadata?.groundingChunks
        ?.map((chunk: any) => chunk.web)
        .filter((web: any) => web)
        .map((web: any) => ({ title: web.title, uri: web.uri })) || [];

      setMessages(prev => [...prev, { role: 'model', text: responseText, sources }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Tyvärr uppstod ett fel. Försök igen senare eller kontakta kundtjänst." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-monta">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 flex flex-col max-h-[600px] h-[500px]">
          
          {/* Header */}
          <div className="bg-slate-900 p-6 flex justify-between items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-cc-green rounded-full blur-[40px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                <Sparkles className="w-5 h-5 text-cc-green" />
              </div>
              <div>
                <h3 className="text-white font-black text-lg tracking-tight">Clean Charge AI</h3>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-cc-green rounded-full animate-pulse"></span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => onToggle(false)}
              className="text-slate-400 hover:text-white transition-colors relative z-10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#003DFF] text-white rounded-tr-sm' 
                      : 'bg-white text-slate-600 border border-slate-100 rounded-tl-sm'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-slate-100">
                      <Zap className="w-3 h-3 text-cc-green fill-cc-green" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Charge Bot</span>
                    </div>
                  )}
                  
                  {msg.text}

                  {/* Display Sources if available */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100/50">
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Verifierade Källor
                      </p>
                      <div className="space-y-1.5">
                        {msg.sources.map((source, i) => (
                          <a 
                            key={i} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group"
                          >
                            <ExternalLink className="w-3 h-3 text-cc-green shrink-0" />
                            <span className="text-[10px] font-medium text-slate-600 truncate group-hover:text-[#003DFF] transition-colors">
                              {source.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-slate-100 shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-cc-green animate-spin" />
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Tänker & Söker...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={handleSubmit} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ställ en fråga..."
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-4 pl-6 pr-14 text-sm font-medium focus:outline-none focus:border-cc-green focus:ring-2 focus:ring-cc-green/10 transition-all placeholder:text-slate-400 text-slate-800"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 p-2 bg-slate-900 text-white rounded-full hover:bg-cc-green disabled:opacity-50 disabled:hover:bg-slate-900 transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-center mt-2">
              <p className="text-[9px] text-slate-400 font-medium">Powered by Gemini Nano Banana API with Search</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => onToggle(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-cc-green hover:bg-[#008e68]'
        }`}
      >
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <MessageSquare className="w-8 h-8 text-white fill-white" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
