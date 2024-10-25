'use client' // Error components must be Client Components

import { Heading } from '@/components/Heading'
import { ArrowBack } from '@/icons/ArrowBack'
import Image from 'next/image'
import { useEffect } from 'react'
import style from '../app/error/error.module.css'
import banner from '../app/error/500.png'
import Link from 'next/link'

export default function Error({ error }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className={style.container}>
            <Image src={banner} />
            <Heading>Opa! Ocorreu um erro.</Heading>
            <p className={style.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
            <Link href="/">
                Voltar ao feed <ArrowBack color='#81FE88' />
            </Link>
        </div>
    )
}