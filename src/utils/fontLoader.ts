export const preloadIosevkaFont = () => {
  if ('fonts' in document) {
    const fontUrl = 'https://cdn.jsdelivr.net/npm/@fontsource/iosevka/files/iosevka-latin-400-normal.woff2';
    
    // Preload the font file
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = fontUrl;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Load the font using FontFace API
    const font = new FontFace('Iosevka', `url(${fontUrl})`, {
      style: 'normal',
      weight: '400',
      display: 'swap'
    });

    font.load().then(() => {
      document.fonts.add(font);
    });
  }
};