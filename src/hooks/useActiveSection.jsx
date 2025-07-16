// hooks/useActiveSection.js
import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight / 2) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
};

export default useActiveSection;
