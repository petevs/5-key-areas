import Header from "@/components/Header";
import NarrowContainer from "@/components/NarrowContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"
import EntryFooter from "./components/EntryFooter";
import { EntryProvider } from './components/EntryProvider'

export default function layout({ children }) {
    return (
        <EntryProvider>
            <Header />
            {children}
        </EntryProvider>
    )
}