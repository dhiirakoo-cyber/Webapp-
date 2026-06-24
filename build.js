import fs from 'fs';
import path from 'path';

const filesToCopy = [
  'index.html',
  'courses.html',
  'course-details.html',
  'login.html',
  'register.html',
  'demo.html',
  'enroll.html',
  'admin.html',
  'style.css',
  'script.js'
];

const dirsToCopy = [
  'images',
  'assets'
];

function build() {
  console.log('[Amoo Academy Build] Starting build...');
  const distDir = path.join(process.cwd(), 'dist');

  // Clean old dist
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
    console.log('[Amoo Academy Build] Cleaned old dist folder.');
  }

  // Create new dist
  fs.mkdirSync(distDir);
  console.log('[Amoo Academy Build] Created dist folder.');

  // Copy files
  filesToCopy.forEach(file => {
    const srcPath = path.join(process.cwd(), file);
    const destPath = path.join(distDir, file);

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[Amoo Academy Build] Copied ${file} to dist/`);
    } else {
      console.warn(`[Amoo Academy Build] Warning: ${file} not found.`);
    }
  });

  // Copy directories
  dirsToCopy.forEach(dir => {
    const srcDir = path.join(process.cwd(), dir);
    const destDir = path.join(distDir, dir);

    if (fs.existsSync(srcDir)) {
      copyFolderSync(srcDir, destDir);
      console.log(`[Amoo Academy Build] Copied directory ${dir} to dist/`);
    } else {
      // Create empty folder in dist if it doesn't exist
      fs.mkdirSync(destDir, { recursive: true });
      console.log(`[Amoo Academy Build] Created empty ${dir} in dist/`);
    }
  });

  console.log('[Amoo Academy Build] Build completed successfully!');
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

build();
