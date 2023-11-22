import React from 'react'
import Link from 'next/link';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const Footer = () => {
    return (
        <footer className="static inset-x-0 w-full bottom-0 my-4 select-none">
            <div className="md:flex md:items-center md:justify-between py-2 md:py-18 border-t border-gray-200"></div>
            <div className="flex h-[50px] py-2 px-12 items-center justify-center">
                <div className="flex flex-col w-full">
                    <div className="flex w-full lg:w-auto items-center justify-between">
                        <a href="/" className="text-lg">
                            <Link href="/" className="flex z-40 font-semibold">
                                <span>fraser</span>
                            </Link>
                        </a>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500">Powered by
                                <span className="font-semibold text-slate-500"> Vercel </span>
                                <span className="text-slate-500"> and </span>
                                <span className="font-semibold text-slate-500"> Pinecone.</span>
                            </span>
                            <a
                                className="flex px-2 items-center hover:opacity-50"
                                href="https://twitter.com/aqilmarwann"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TwitterLogoIcon fontSize={30} />
                            </a>
                            <a
                                className="flex items-center hover:opacity-50"
                                href="https://github.com/aqilmarwan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHubLogoIcon aria-setsize={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

