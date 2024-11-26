# altempo Assessment
## Repository Owner
This repository is maintained by Cristian Cortés.

# Frontend Technical Test

This project is a frontend implementation based on a Figma design, developed as part of a technical test. The project demonstrates the ability to translate precise designs into code, implement complex interactions, and maintain good development practices. [Figma here](https://www.figma.com/design/qOXSiKknsC31UZ1MNYBj82/Reto-Devs?node-id=945-4600&t=hH5aZYVgWU4Zj4Tw-1)

## 🚀 Technologies Used

- **React + TypeScript**: Main framework for interface construction
- **Vite**: Build and development tool
- **Tailwind CSS**: Utility-first CSS framework
- **Linaria**: CSS-in-JS processing
- **@radix-ui/react-slider**: Base component for slider implementation
- **Framer Motion**: Library for fluid animations

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ccor20/altempo-assessment
```

2. Install dependencies:
```bash
yarn install
```

3. Start development server:
```bash
yarn dev
```

4. Open browser at:
```
http://localhost:5173/
```

## 📁 Project Structure

```
src/
├── assets/           # Static resources
├── components/       # Reusable components
│   ├── Buttons/     # Button components
│   ├── Inputs/      # Input components
│   ├── Layouts/     # Layout components
│   └── Stepper/     # Step component
├── pages/           # Application pages
│   └── ContractorProcess/
│       ├── components/    # Process-specific components
│       │   ├── IdealService/
│       │   ├── InterestPreferences/
│       │   └── Signup/
│       └── hooks/         # Specific hooks
├── types/           # TypeScript definitions
├── utils/           # Utilities and helpers
├── enums/          # Enumerations
└── styles/         # Global styles
```

## 🎯 Technical Decisions

### Architecture
- **Modularization**: Components designed in isolation for easy reuse and maintenance
- **TypeScript**: Implemented for type-safety and better code documentation
- **Tailwind + Linaria**: Combination chosen to maintain code readability by separating complex styles

### Optimizations
1. **Image Performance**:
   - Lazy loading implementation
   - Intersection Observer for optimized loading
   - Loading placeholders

2. **Components**:
   - Modular design to avoid unnecessary re-renders

### External Libraries
- **@radix-ui/react-slider**: Chosen for accessibility and solid slider foundation
- **Framer Motion**: Selected for fluid animations and optimized performance

## 🔍 Implemented Features

1. **Responsive Design**:
   - Fluid adaptation to different screen sizes
   - Visual integrity maintenance at key breakpoints

2. **Interactions**:
   - Smooth state transitions
   - Visual feedback for user actions
   - Performance-optimized animations

## 📝 Additional Notes

- Project follows ESLint style guides for code consistency
- Structure allows for organized project scaling