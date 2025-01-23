"use client";

export default function Footer() {

    return (
        <footer className="bg-purple-500">
            <section className="container mx-auto p-4">
                <p className="text-white text-center">
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </section>
        </footer>
    )
}