
import React, { useState, useRef, useEffect } from 'react';
import { generateVisualConcept, cloneImage } from '../services/geminiService';
import { Sparkles, Loader2, Image as ImageIcon, Download, CheckCircle2, Sliders, Eye, Upload, X, Copy } from 'lucide-react';

interface AiDesignerProps {
  initialPrompt?: string;
}

const AiDesigner: React.FC<AiDesignerProps> = ({ initialPrompt }) => {
  const [description, setDescription] = useState(initialPrompt || '');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [sourceImage, setSourceImage] = useState<{ base64: string; type: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialPrompt) {
      setDescription(initialPrompt);
    }
  }, [initialPrompt]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage({
          base64: reader.result as string,
          type: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!description.trim() && !sourceImage) return;
    setIsLoading(true);
    try {
      let imageUrl;
      if (sourceImage) {
        imageUrl = await cloneImage(sourceImage.base64, sourceImage.type, description || "Create a premium variation of this setup.");
      } else {
        imageUrl = await generateVisualConcept(description);
      }
      setResultImage(imageUrl);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const removeSourceImage = () => {
    setSourceImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden font-monta">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-cc-green text-white px-4 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4 fill-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Nano Banana Vision v2.5</span>
              </div>
              <h2 className="text-5xl font-black text-slate-800 tracking-tighter leading-tight">AI Studio & Cloner.</h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Skapa från grunden eller klona en befintlig miljö. Vår AI transformerar dina bilder till professionella Clean Charge-renderingar.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 space-y-6">
              <div className="flex items-center justify-between text-slate-800 font-black uppercase text-xs tracking-widest">
                <div className="flex items-center space-x-3">
                  <Sliders className="w-4 h-4 text-cc-green" />
                  <span>Studio Kontroll</span>
                </div>
              </div>
              
              {/* Image Upload Area */}
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block ml-2">Referensbild (Valfritt)</label>
                {!sourceImage ? (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="group cursor-pointer aspect-video border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center bg-white hover:border-cc-green hover:bg-cc-green/5 transition-all duration-300"
                  >
                    <Upload className="w-8 h-8 text-slate-300 group-hover:text-cc-green mb-2 transition-colors" />
                    <p className="text-[10px] font-bold text-slate-400 group-hover:text-cc-green uppercase tracking-widest">Klicka för att ladda upp</p>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      accept="image/*" 
                      className="hidden" 
                    />
                  </div>
                ) : (
                  <div className="relative group aspect-video rounded-3xl overflow-hidden border-2 border-cc-green shadow-lg shadow-cc-green/10">
                    <img src={sourceImage.base64} alt="Source" className="w-full h-full object-cover" />
                    <button 
                      onClick={removeSourceImage}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="absolute inset-0 bg-cc-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-black uppercase text-[10px] tracking-widest">Bild vald för kloning</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block ml-2">
                  {sourceImage ? 'Förfina kloningen' : 'Beskriv visionen'}
                </label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={sourceImage ? "Lägg till instruktioner för att ändra bilden..." : "Beskriv din uppfart, ditt garage eller företagets parkering..."}
                  className="w-full bg-white border border-slate-200 rounded-3xl p-6 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-cc-green focus:ring-4 focus:ring-cc-green/5 transition-all h-32 resize-none shadow-inner"
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isLoading || (!description && !sourceImage)}
                className="w-full bg-cc-green hover:bg-[#008e68] disabled:opacity-40 text-white font-black py-5 rounded-full transition-all flex items-center justify-center space-x-3 shadow-xl shadow-cc-green/20"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {sourceImage ? <Copy className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    <span>{sourceImage ? 'Klona & Förbättra' : 'Generera Vision'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            {resultImage ? (
              <div className="relative group">
                <div className="relative rounded-[4rem] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,177,130,0.3)] border-[12px] border-slate-50">
                  <img src={resultImage} alt="AI Vision" className="w-full h-auto aspect-video object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cc-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-xl flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-cc-green" />
                      <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Vision Klar för Installation</span>
                    </div>
                    <button className="bg-cc-green text-white p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform">
                      <Download className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-10 flex items-center justify-between text-slate-400 px-10">
                  <div className="flex space-x-8">
                    <div className="text-center">
                      <p className="text-slate-800 font-black">1024px</p>
                      <p className="text-[9px] uppercase font-bold tracking-widest">Resolution</p>
                    </div>
                    <div className="text-center border-l border-slate-100 pl-8">
                      <p className="text-slate-800 font-black">16:9</p>
                      <p className="text-[9px] uppercase font-bold tracking-widest">Aspect Ratio</p>
                    </div>
                  </div>
                  <p className="text-xs font-medium italic">"Real-time visual rendering powered by Clean Charge Vision Engine"</p>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-slate-50 border-4 border-dashed border-slate-100 rounded-[4rem] flex flex-col items-center justify-center text-slate-300 p-20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cc-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                {isLoading ? (
                  <div className="space-y-6 relative z-10">
                    <div className="w-20 h-20 border-4 border-cc-green/20 border-t-cc-green rounded-full animate-spin mx-auto shadow-lg shadow-cc-green/10"></div>
                    <p className="text-xl font-black text-cc-green tracking-tighter animate-pulse uppercase">Bearbetar vision...</p>
                  </div>
                ) : (
                  <div className="relative z-10 space-y-6">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl transition-transform duration-700 group-hover:scale-110">
                      <ImageIcon className="w-12 h-12 text-slate-200" />
                    </div>
                    <div className="max-w-xs mx-auto">
                      <p className="text-lg font-black text-slate-400 tracking-tight uppercase">Redo att visualisera</p>
                      <p className="text-sm font-medium text-slate-300 mt-2">Ladda upp en bild för att klona den eller skriv en beskrivning för att generera något helt nytt.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDesigner;
