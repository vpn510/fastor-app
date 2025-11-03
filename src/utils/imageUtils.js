// Convert canvas to Blob
export const getCanvasBlob = (canvas) => {
  return new Promise((resolve, reject) => {
    if (!canvas) return reject('Canvas not found');
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject('Failed to convert canvas to blob');
    }, 'image/png');
  });
};

// Download canvas image as PNG
export const downloadCanvasImage = (canvas, filename = 'restaurant.png') => {
  getCanvasBlob(canvas).then((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  });
};

// Convert canvas to File object (for sharing)
export const getCanvasFile = async (canvas, filename = 'restaurant.png') => {
  const blob = await getCanvasBlob(canvas);
  return new File([blob], filename, { type: 'image/png' });
};