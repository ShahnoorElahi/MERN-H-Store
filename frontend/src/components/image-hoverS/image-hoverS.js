import React, { useState, useRef, useEffect } from 'react';

// Main App component
const App2 = ({ banners }) => {
  return (

        <ImageZoom
          src={`${banners}`}
          alt="Provided Image"
          zoomPower={2} // Adjust this value to control how much it zooms (2 means 200% zoom)
          height={380} // Pass height as a number (in pixels)
        />

  );
};

// ImageZoom component for handling the zoom logic
const ImageZoom = ({ src, alt, zoomPower = 2, height = 384 }) => { // Default height to 384px (equivalent to h-96)
  // State to manage the background position for the zoom effect
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  // State to control the zoom level (background-size)
  const [backgroundSize, setBackgroundSize] = useState('100%');
  // State to track if the mouse is currently hovering over the image
  const [isHovering, setIsHovering] = useState(false);
  // State to track if the image has loaded successfully
  const [imageLoaded, setImageLoaded] = useState(false);
  // State to track if there was an error loading the image
  const [imageError, setImageError] = useState(false);

  // Ref to the container div to get its dimensions
  const imageContainerRef = useRef(null);

  // Use useEffect to pre-load the image and handle loading/error states
  useEffect(() => {
    setImageLoaded(false); // Reset loaded state on src change
    setImageError(false); // Reset error state on src change

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageLoaded(true);
      setImageError(false);
    };

    img.onerror = () => {
      console.error("Failed to load image:", src);
      setImageLoaded(false);
      setImageError(true);
    };
  }, [src]); // Re-run effect if src changes

  /**
   * Handles the mouse entering the image container.
   * Sets the hover state to true and adjusts the background size for zoom.
   */
  const handleMouseEnter = () => {
    if (imageLoaded) { // Only zoom if image is loaded
      setIsHovering(true);
      // Set the background size to the zoomPower multiplied by 100%
      setBackgroundSize(`${zoomPower * 100}%`);
    }
  };

  /**
   * Handles the mouse leaving the image container.
   * Resets the hover state, background size, and position.
   */
  const handleMouseLeave = () => {
    setIsHovering(false);
    setBackgroundSize('100%'); // Reset to original size
    setBackgroundPosition('0% 0%'); // Reset position
  };

  /**
   * Handles the mouse moving over the image container.
   * Calculates the background position based on cursor coordinates.
   * @param {Object} e - The mouse event object.
   */
  const handleMouseMove = (e) => {
    if (imageLoaded && imageContainerRef.current) { // Only calculate if image is loaded
      const { left, top, width, height: containerHeight } = imageContainerRef.current.getBoundingClientRect();

      // Calculate the cursor's position relative to the image container
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Calculate the percentage position for background-position.
      // We subtract 1 from zoomPower because 100% zoom means no shift.
      // For example, if zoomPower is 2 (200%), we want to shift the background
      // by (x / width) * 100% for the remaining 100% of zoom.
      const xPercent = (x / width) * 100;
      const yPercent = (y / containerHeight) * 100;

      // Adjust the background position based on the cursor's relative position
      // and the zoom power. This creates the "follow" effect.
      // The formula (x / width) * (100 - (100 / zoomPower)) ensures the
      // background moves proportionally to the cursor within the zoomed area.
      const backgroundX = (x / width) * (100 - (100 / zoomPower));
      const backgroundY = (y / containerHeight) * (100 - (100 / zoomPower));

      setBackgroundPosition(`${backgroundX}% ${backgroundY}%`);
    }
  };

  return (
    <div
      ref={imageContainerRef}
      // Removed the height Tailwind class from className
      className={`relative w-full overflow-hidden rounded-lg shadow-md group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        height: `${height}px`, // Apply height directly using style prop
        backgroundImage: imageLoaded ? `url(${src})` : 'none',
        backgroundColor: imageError ? '#f8d7da' : '#e2e8f0', // Red for error, light gray for loading/default
        backgroundRepeat: 'no-repeat',
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        transition: 'background-size 0.2s ease-out', // Smooth transition for zoom in/out
        backgroundOrigin: 'border-box',
        backgroundClip: 'border-box',
        cursor: imageLoaded ? 'zoom-in' : 'not-allowed', // Change cursor based on image load
        display: 'flex', // Use flexbox for centering content inside
        alignItems: 'center',
        justifyContent: 'center',
        border: imageError ? '2px solid #dc3545' : 'none', // Red border on error
      }}
    >
      {!imageLoaded && !imageError && (
        <div className="text-gray-600 text-lg font-inter">Loading Image...</div>
      )}
      {imageError && (
        <div className="text-red-700 text-lg font-bold text-center p-4 font-inter">
          Error loading image. <br /> Please check the URL or try again.
        </div>
      )}
      {imageLoaded && !isHovering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg font-inter">
          Hover to Zoom
        </div>
      )}
    </div>
  );
};

export default App2;
