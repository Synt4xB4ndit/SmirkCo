import './globals.css'

export const metadata = {
  title: 'SmirkCp',
  description: 'A Vibe to chill with through Designer Apparel',
}

import { Inter } from 'next/font/google'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'bg-indigo-300 min-h-screen flex flex-col relative ' + inter.className}>
        <Header />
        <div className='flex-1'>

          {children}
        </div>
        <footer className='flex items-center flex-wrap justify-center border-t border-solid border-slate-300 bg-blue-800 p-4 md:p-8'>
          <i className="fa-solid fa-shop bg-cyan text-red-600 hover:text-white cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </footer>
        <div id="portal"></div>
      </body>
    </html>
  )
}
