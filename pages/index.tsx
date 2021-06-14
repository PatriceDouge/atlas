import Head from 'next/head'
import Image from 'next/image'
import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import Login from '../components/Auth/Login'
import Sidebar from '../components/Sidebar/index'
import Link from 'next/link'

export default function Home() {
  const isLoggedIn = true;
    
  if (isLoggedIn)  {
    return (
      <div class="grid grid-flow-col gap-3">
        <div class="side-menu bg-100 col-span-1">
          <Link href="/">
            <a>Atlas</a>
          </Link>
          <nav>
            <ul>
                <li>
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li>
                <Link href="/translate">
                    <a>Translate</a>
                  </Link>
                </li>
            </ul>
          </nav>
        </div>
        <div class="bg-100 col-span-4">Home</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-3xl font bold text-gray-900 mt-2 text-center">Atlas</div>

        <div className="text-center font-medium text-xl">Sign in to your account</div>
        <div className="text-center font-small text-xl">Or register for an account</div>
      </div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-380">
        <Login />
      </div>
    </div>
  )
}
