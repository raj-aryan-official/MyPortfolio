
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const MAX_WIDTH = 1920;
const QUALITY_JPEG = 80;
const QUALITY_PNG = 80;

// Helper to get file size in MB
const getFileSizeMB = (filePath) => {
    const stats = fs.statSync(filePath);
    return stats.size / (1024 * 1024);
};

const processImage = async (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const originalSize = getFileSizeMB(filePath);
    console.log(`Processing: ${path.basename(filePath)} (${originalSize.toFixed(2)} MB)`);

    try {
        let pipeline = sharp(filePath);
        const metadata = await pipeline.metadata();

        if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize({ width: MAX_WIDTH });
        }

        if (ext === '.png') {
            pipeline = pipeline.png({ quality: QUALITY_PNG, compressionLevel: 9 });
        } else {
            pipeline = pipeline.jpeg({ quality: QUALITY_JPEG, mozjpeg: true });
        }

        const buffer = await pipeline.toBuffer();
        fs.writeFileSync(filePath, buffer);

        const newSize = getFileSizeMB(filePath);
        console.log(`Done: ${path.basename(filePath)} -> ${newSize.toFixed(2)} MB (${((1 - newSize / originalSize) * 100).toFixed(0)}% saved)`);

    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
};

const walkimagedir = async (dir) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await walkimagedir(filePath);
        } else {
            await processImage(filePath);
        }
    }
};

walkimagedir(publicDir).then(() => {
    console.log('Image optimization complete.');
});
