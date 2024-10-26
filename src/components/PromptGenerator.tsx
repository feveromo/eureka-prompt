import React, { useState } from 'react';
import { Sparkles, History, Copy } from 'lucide-react';
import { subjects, styles, modifiers } from '../data/promptData';

interface PromptPiece {
  text: string;
  theme: string;
  weight: number;
}

const PromptGenerator: React.FC = () => {
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const weightedRandom = (arr: PromptPiece[], lastTheme?: string): PromptPiece => {
    const themeWeightBonus = 0.2;
    const adjustedArr = arr.map(item => ({
      ...item,
      weight: lastTheme && item.theme === lastTheme ? item.weight + themeWeightBonus : item.weight
    }));

    const totalWeight = adjustedArr.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const item of adjustedArr) {
      random -= item.weight;
      if (random <= 0) return item;
    }
    return adjustedArr[0];
  };

  const generatePrompt = () => {
    const subject = weightedRandom(subjects);
    const style = weightedRandom(styles, subject.theme);
    const modifier = weightedRandom(modifiers, style.theme);

    const newPrompt = `${subject.text}, ${style.text}, ${modifier.text}`;
    setCurrentPrompt(newPrompt);
    setHistory(prev => [newPrompt, ...prev.slice(0, 9)]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            AI Image Prompt Generator
          </h1>

          <div className="space-y-6">
            {currentPrompt && (
              <div className="bg-gray-800/50 rounded-xl p-6">
                <p className="text-lg text-white font-medium">{currentPrompt}</p>
                <button
                  onClick={() => copyToClipboard(currentPrompt)}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <Copy className="w-4 h-4" />
                  Copy to clipboard
                </button>
              </div>
            )}

            <button
              onClick={generatePrompt}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Generate Prompt
            </button>

            {history.length > 0 && (
              <div>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mt-4"
                >
                  <History className="w-5 h-5" />
                  {showHistory ? 'Hide History' : 'Show History'}
                </button>

                {showHistory && (
                  <div className="mt-4 space-y-3">
                    {history.map((prompt, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/30 rounded-lg p-4 text-white/80 text-sm hover:bg-gray-800/40 transition-colors cursor-pointer"
                        onClick={() => copyToClipboard(prompt)}
                      >
                        {prompt}
                      </div>
                    ))}
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

export default PromptGenerator;