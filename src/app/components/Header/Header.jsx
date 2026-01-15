// components/Header/Header.jsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Building2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-md border-b border-border">
      {/* Barra superior de contacto */}
      <div className="hidden lg:block bg-primary-700 text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+51123456789" 
                className="flex items-center hover:text-primary-200 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (01) 234-5678
              </a>
              <a 
                href="mailto:contacto@zeng.com" 
                className="flex items-center hover:text-primary-200 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                contacto@zeng.com
              </a>
            </div>
            <div className="flex items-center">
              <Building2 className="h-4 w-4 mr-2" />
              <span>Lima, Perú</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-primary-600 text-primary-foreground p-2 rounded-lg mr-3">
                <Building2 className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Inversiones Bienestar
                </h1>
                <p className="text-sm text-primary-600 font-semibold">ZENG S.A.C.</p>
              </div>
            </Link>

            {/* Menú Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-default-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-default-700 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950 py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Contacto móvil */}
                <div className="pt-6 border-t border-border">
                  <a 
                    href="tel:+51123456789" 
                    className="flex items-center text-default-600 hover:text-primary-600 py-2"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    (01) 234-5678
                  </a>
                  <a 
                    href="mailto:contacto@zeng.com" 
                    className="flex items-center text-default-600 hover:text-primary-600 py-2"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    contacto@zeng.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}