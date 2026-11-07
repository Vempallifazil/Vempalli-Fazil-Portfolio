import sharp from 'sharp';
const portrait='public/assets/avatar-0.webp';
for (const width of [420,720,1100]) {
 await sharp(portrait).resize(width).webp({quality:90}).toFile('public/assets/portrait-'+width+'.webp');
}
await sharp(portrait).resize(630,630).extend({left:570,right:0,top:0,bottom:0,background:'#15070e'}).composite([{input:Buffer.from('<svg width="1200" height="630"><text x="55" y="330" font-family="sans-serif" font-weight="bold" font-size="116" fill="white">FAZIL</text><text x="60" y="397" font-family="sans-serif" font-size="32" fill="#ff5266" letter-spacing="9">THE SERIES</text></svg>')}]).jpeg().toFile('public/assets/og-image.jpg');
