import Head from 'next/head'
import Image from 'next/image'
import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import Login from '../components/Auth/Login'
import Sidebar from '../components/Sidebar/index'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
    
  if (session)  {
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
        <div class="bg-100 col-span-4">
          <h1>Home</h1>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
}
