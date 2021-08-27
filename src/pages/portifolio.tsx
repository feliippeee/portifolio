import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Pages from "../components/Body";

export default function Portifólio() {
    return (
        <>  
        <Head>
            <title>Portifólio</title>
        </Head>  
          
        <Pages />
            
        </>
    ) ;
}