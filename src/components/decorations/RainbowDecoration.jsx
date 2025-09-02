// src/components/decorations/RainbowDecoration.jsx
export const RainbowDecoration = ({ className = '' }) => (
  <svg className={className} width="100" height="60" viewBox="0 0 100 60" fill="none">
    <path d="M10 60 Q50 20 90 60" stroke="#c6302c" strokeWidth="4" fill="none" opacity="0.3"/>
    <path d="M15 60 Q50 25 85 60" stroke="#cca47f" strokeWidth="4" fill="none" opacity="0.3"/>
    <path d="M20 60 Q50 30 80 60" stroke="#ddbc9b" strokeWidth="4" fill="none" opacity="0.3"/>
  </svg>
)
export default RainbowDecoration