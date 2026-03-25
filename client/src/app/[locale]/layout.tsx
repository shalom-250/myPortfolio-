import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";

/* 
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
*/

// Using system fallbacks that look similar to Inter and Outfit for build stability
const inter = { variable: "font-inter" };
const outfit = { variable: "font-outfit" };

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: "Shalom Dev | Full Stack Developer",
    description: "Mobile & Luxury Web Specialist. Building Scalable Systems with Precision & Elegance.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo.png",
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-accent-red/30 selection:text-white`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {props.children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
