const dev = process.env.NODE_ENV !== 'production';
console.log(process);
export const server = dev ? 'http://localhost:3000' : 'https://yy-nextjsdemo.vercel.app';
