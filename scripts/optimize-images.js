
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const MAX_WIDTH = 1920;
const QUALITY_WEBP = 80;

// Helper to get file size in MB
const getFileSizeMB = (filePath) => {
    try {
        const stats = fs.statSync(filePath);
        return stats.size / (1024 * 1024);
    } catch (e) {
        return 0;
    }
};

const processImage = async (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    const webpPath = path.join(dir, `${name}.webp`);

    // Skip if WebP already exists and is newer (optional, but good for re-running)
    // For now, we overwrite to ensure latest settings are applied.

    const originalSize = getFileSizeMB(filePath);
    console.log(`Converting: ${path.basename(filePath)} (${originalSize.toFixed(2)} MB)`);

    try {
        let pipeline = sharp(filePath);
        const metadata = await pipeline.metadata();

        if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize({ width: MAX_WIDTH });
        }

        pipeline = pipeline.webp({ quality: QUALITY_WEBP });

        const buffer = await pipeline.toBuffer();
        fs.writeFileSync(webpPath, buffer);

        const newSize = getFileSizeMB(webpPath);
        console.log(`Created: ${path.basename(webpPath)} -> ${newSize.toFixed(2)} MB (${((1 - newSize / originalSize) * 100).toFixed(0)}% saved)`);

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
    console.log('WebP conversion complete.');
});
