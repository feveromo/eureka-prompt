# AI Prompt Generator 🎨✨

A beautiful and intuitive AI prompt generator built with React, TypeScript, and Tailwind CSS. Generate creative prompts for AI image generation with thematic consistency and weighted randomization.

![AI Prompt Generator](https://images.unsplash.com/photo-1675557009875-915f7fdc76c4?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Features

- **Smart Prompt Generation**: Combines subjects, styles, and modifiers with weighted randomization
- **Theme Consistency**: Intelligently maintains thematic coherence across generated prompts
- **Prompt History**: Keep track of your previously generated prompts
- **Copy to Clipboard**: Easily copy prompts with one click
- **Responsive Design**: Beautiful UI that works on all devices
- **Dark Mode**: Eye-friendly dark theme with glass morphism effects

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-prompt-generator.git
cd ai-prompt-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🛠️ Built With

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **Lucide React** - Icons
- **ESLint** - Code Quality

## 📁 Project Structure

```
src/
├── components/
│   └── PromptGenerator.tsx    # Main prompt generator component
├── data/
│   └── promptData.ts          # Prompt pieces and configurations
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Prompts

Edit `src/data/promptData.ts` to add new subjects, styles, or modifiers:

```typescript
export const subjects = [
  { text: "your subject", theme: "theme-category", weight: 0.7 },
  // Add more subjects...
];
```

### Modifying Weights

Adjust the `weight` property (0.0 to 1.0) in promptData.ts to change the likelihood of specific prompts appearing.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/ai-prompt-generator](https://github.com/yourusername/ai-prompt-generator)

---

Made with ❤️ by [Your Name]