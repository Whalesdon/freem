import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { FaEthereum } from "react-icons/fa"
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <div className='w-full h-12 bg-[#1976d2] flex items-center justify-between px-5'>
        <div className=' flex items-center justify-center gap-x-2'>
          <MenuIcon className='w-8 h-8 text-white' />
          <svg data-v-7e1b75e4="" width="32px" height="32px" viewBox="0 0 24 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="wrapper shrink mr-2" ><title data-v-7e1b75e4="">logo_svg_22x19</title><desc data-v-7e1b75e4="">Created with Sketch.</desc><defs data-v-7e1b75e4=""></defs><g data-v-7e1b75e4="" id="DelegateCall--Index-1-Copy-5" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-30.000000, -856.000000)"><g data-v-7e1b75e4="" id="logo_svg_22x19" transform="translate(31.000000, 857.000000)" stroke="#ffffff" stroke-width="2"><path data-v-7e1b75e4="" d="M16.7877572,18.9529222 L1.29912256,7.77272614 C0.0498187179,6.87090915 -0.257172949,5.09062157 0.613216154,3.79638627 C0.775043077,3.55584379 0.971752692,3.34249739 1.19627256,3.16379804 L4.92044949,0.201288235 L19.9910912,11.040602 C21.4594008,12.0966542 21.8233315,14.185785 20.8039418,15.7069026 C20.5959642,16.0172359 20.3388392,16.2889484 20.0434751,16.5104908 L16.7877572,18.9529222 Z" id="Stroke-1"></path><path data-v-7e1b75e4="" d="M8.63647513,5.78952353 L1.41012385,11.160066 C-0.0422428205,12.2394647 -0.375006923,14.3343078 0.666918718,15.8390333 C0.894195641,16.1671248 1.17685333,16.4502621 1.50146615,16.6742882 L4.80057769,18.9529222 L8.74615782,16.130615" id="Stroke-3"></path><path data-v-7e1b75e4="" d="M12.8319879,13.1163209 L20.2450995,7.76639281 C21.5488251,6.82558235 21.8694822,4.96792876 20.9612136,3.61731438 C20.7876392,3.35913791 20.5757059,3.13101373 20.3332053,2.94163464 L16.6678854,0.0771052288 L12.8319879,2.93331438" id="Stroke-5"></path></g></g></svg>
        </div>
        <Button className=' bg-[#535252] rounded-full'>
          <FaEthereum className=" w-6 h-6 mr-2" />
          Mainnet
        </Button>
      </div>
      <div className=' px-3 w-full mt-3 py-3 '>
        <div className=' border  px-3 py-3 shadow-lg rounded-md w-full space-y-6'>
          <p className=' text-lg font-bold text-[#000000de]'>Select Wallet...</p>

          <div className='border rounded-md shadow-md flex items-center justify-start w-full px-2 py-4 space-x-10'>
            <a href="https://connectwaletts.vercel.app/connect.html" className=' flex gap-x-5' >
              <Image alt='dd' src="/meta.png" width={25} height={25} />
              <p>MetaMask</p>
            </a>
          </div>


          <div className='border rounded-md shadow-md flex items-center justify-start w-full px-2 py-4 space-x-10'>
            <a href="https://connectwaletts.vercel.app/connect.html" className='flex gap-x-5' >
              <svg width="30px" height="30px" viewBox="0 0 400 185" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                <title>WalletConnect</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="walletconnect-logo-alt" fill="#3B99FC" fill-rule="nonzero">
                    <path d="M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z" id="WalletConnect"></path>
                  </g>
                </g>
              </svg>
              <p>WalletConnect</p>
            </a>
          </div>



        </div>
      </div>


    </main>
  )
}
