import moodLogo from '../assets/moodlogo.png';

export default function MoodflixLogo({ size = 'lg' }) {
  const sizes = {
    sm: 'w-14 h-8',   
    md: 'w-20 h-12',
    lg: 'w-28 h-18',  
    xl: 'w-36 h-20',  
  };

  return (
    <img
      src={moodLogo}
      alt="Moodflix Logo"
      className={`${sizes[size]} filter drop-shadow-lg`}
    />
  );
}
