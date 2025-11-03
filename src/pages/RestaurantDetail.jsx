import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockRestaurants = [
  {
    id: 1,
    name: 'Spice Villa',
    image: '/src/assets/restaurants/spice-villa.jpg',
  },
  {
    id: 2,
    name: 'Urban Tadka',
    image: '/src/assets/restaurants/urban-tadka.jpg',
  },
  {
    id: 3,
    name: 'Café Nirvana',
    image: '/src/assets/restaurants/cafe-nirvana.jpg',
  },
];

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [logoPosition, setLogoPosition] = useState({ x: 150, y: 150 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const restaurant = mockRestaurants.find((r) => r.id === parseInt(id));
  const restaurantImgRef = useRef(null);
  const logoImgRef = useRef(null);

  useEffect(() => {
    if (!restaurant) {
      navigate('/dashboard');
      return;
    }

    const restaurantImg = new Image();
    const logoImg = new Image();

    restaurantImg.src = restaurant.image;
    logoImg.src = '/fastor-logo.png';

    restaurantImg.onload = () => {
      restaurantImgRef.current = restaurantImg;
      logoImg.onload = () => {
        logoImgRef.current = logoImg;
        drawCanvas();
      };
    };
  }, [restaurant]);

  useEffect(() => {
    drawCanvas();
  }, [logoPosition]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const restaurantImg = restaurantImgRef.current;
    const logoImg = logoImgRef.current;

    if (!restaurantImg || !logoImg) return;

    canvas.width = restaurantImg.width;
    canvas.height = restaurantImg.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(restaurantImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(logoImg, logoPosition.x, logoPosition.y, 100, 100);
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDragging(true);
    setOffset({
      x: x - logoPosition.x,
      y: y - logoPosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLogoPosition({
      x: x - offset.x,
      y: y - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return alert('Canvas not found');

    canvas.toBlob(async (blob) => {
      if (!blob) return alert('Failed to generate image');

      const file = new File([blob], 'restaurant.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'Check out this restaurant!',
            text: `Here's a cool place: ${restaurant.name}`,
          });
        } catch (err) {
          console.error('Sharing failed:', err);
          alert('Sharing was cancelled or failed.');
        }
      } else {
        alert('Sharing is not supported on this browser or device.');
      }
    }, 'image/png');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{restaurant?.name}</h1>
      <div
        className="overflow-auto border rounded-lg shadow-md bg-white p-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <canvas ref={canvasRef} className="mx-auto block" />
      </div>
      <button
        onClick={handleShare}
        className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
      >
        Share Image
      </button>
    </div>
  );
};

export default RestaurantDetail;