import sharp from 'sharp';

sharp('public/assets/icon-512.svg')
  .resize(512, 512)
  .png()
  .toFile('public/assets/icon-512.png')
  .then(() => console.log('✅ PNG creado'))
  .catch(err => console.error('Error:', err));
