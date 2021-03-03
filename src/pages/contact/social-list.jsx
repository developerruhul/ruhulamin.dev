import React from 'react';

const SocialList = () => {
  return (
    <div className='py-3 sm:py-5 md:pt-6 md:pb-12 max-w-3xl'>
      <ul
        className='grid gap-8'
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
      >
        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-100 hover:border-gray-300 block bg-lightBlue-500 text-white hover:text-gray-100'
            href='https://twitter.com/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div>
                <div className='bg-white text-lightBlue-400 rounded-full p-3'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 512 512'
                    height={36}
                    width={36}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z' />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl'>Twitter</h2>
                Tweet @ me →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-purple-400'
            href='mailto:ruhulamin.webdev@gmail.com'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div>
                <div className='bg-purple-100 text-purple-500 rounded-full p-3'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 512 512'
                    height={36}
                    width={36}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      width={416}
                      height={320}
                      x={48}
                      y={96}
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={32}
                      rx={40}
                      ry={40}
                    />
                    <path
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={32}
                      d='M112 160l144 112 144-112'
                    />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>Email</h2>
                Send me an email →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-gray-500'
            href='https://github.com/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div>
                <div className='bg-gray-100 text-gray-500 rounded-full p-3'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 512 512'
                    height={36}
                    width={36}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z' />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>GitHub</h2>
                Profile on GitHub →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-pink-400'
            href='https://dribbble.com/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div>
                <div className='bg-pink-100 text-pink-500 rounded-full p-3'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 512 512'
                    height={36}
                    width={36}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32zm142.22 103.25a186.36 186.36 0 0144 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73zM256 69.33a185.81 185.81 0 01119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0146-5.95zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0196.34-120.31zM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 00-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0169.33 256c0-3 .12-5.95.35-8.87zM256 442.67a185.57 185.57 0 01-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 01322 430.42a185.06 185.06 0 01-66 12.25zm100.92-29.75a672.61 672.61 0 00-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 01-84.58 136.27z' />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>Dribbble</h2>
                Profile on Dribbble →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-yellow-600'
            href='https://producthunt.com/@ruhulamin3482'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div>
                <div className='bg-yellow-100 text-yellow-500 rounded-full p-3'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 512 512'
                    height={36}
                    width={36}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z' />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col justify-center font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>
                  ProductHunt
                </h2>
                View my products →
              </div>
            </div>
          </a>
        </li>

        <li>
          <a
            className='p-6 border rounded-2xl border-gray-200 transition-all duration-200 hover:border-gray-300 block text-white hover:text-gray-100 bg-blue-500'
            href='https://www.linkedin.com/in/developerruhul'
            target='_blank'
          >
            <div className='grid grid-flow-col auto-cols-max gap-x-3'>
              <div>
                <div className='bg-blue-100 text-blue-500 rounded-full p-3'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 512 512'
                    height={36}
                    width={36}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col justify-center  font-bold'>
                <h2 className='text-xl font-bold tracking-tight'>LinkedIn</h2>
                Connect with me →
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
