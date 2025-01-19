'use client';

function InteractiveLink() {
  const handleClick = (e: React.MouseEvent) => {
    const colors = ['#5C9C3E', '#866043', '#828282', '#9C7F4A', '#3D5E1F', '#2F5299'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = `${e.clientX}px`;
      confetti.style.top = `${e.clientY}px`;
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
      confetti.style.transition = 'all 1s ease-out';
      confetti.style.opacity = '1';
      document.body.appendChild(confetti);
      setTimeout(() => {
        confetti.style.opacity = '0';
        setTimeout(() => confetti.remove(), 1000);
      }, 100);
    }
  };

  return (
    <a 
      href="https://chriscelaya.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-minecraft-primary transition-colors"
      onClick={handleClick}
    >
      Chris
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#373737] bg-black bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white text-opacity-90 minecraft-text">
          Made with 🤍 from <InteractiveLink />
        </p>
      </div>
    </footer>
  );
} 