import { useState, useEffect } from "react";

function Test() {
  const texts = [
    "Hello, World!",
    "Welcome to React!",
    "Tailwind is awesome!",
    "Enjoy coding!",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-2xl font-bold text-blue-600">
      {texts[currentIndex]}
    </div>
  );
}

export default Test;
