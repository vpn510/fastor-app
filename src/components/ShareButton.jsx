const ShareButton = ({ canvasRef, title = 'Check out this restaurant!', text }) => {
  const handleShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'restaurant.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title,
            text,
          });
        } catch (err) {
          console.error('Sharing failed:', err);
        }
      } else {
        alert('Sharing is not supported on this browser.');
      }
    });
  };

  return (
    <button
      onClick={handleShare}
      className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 cursor-pointer"
    >
      Share Image
    </button>
  );
};

export default ShareButton;