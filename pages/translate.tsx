import Head from 'next/head'
import Image from 'next/image'
import React, { Component } from 'react'
import Sidebar from '../components/Sidebar/index'
import Link from 'next/link'

export default function Translate() {
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
        <div class="bg-100 col-span-4">Translate</div>
      </div>
  )
}