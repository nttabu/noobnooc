import "../../styles/globals.css";

import { Metadata } from "next";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import Link from "next/link";
import { dictionaryKeys, getDictionary } from "../../dictionaries";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  const langEntries = await Promise.all(
    dictionaryKeys.map(async (lang) => {
      const dictionary = await getDictionary(lang);

      return [lang, dictionary.urls.home];
    }),
  );

  return {
    metadataBase: new URL(dictionary.meta.baseUrl),
    title: dictionary.meta.websiteName,
    description: dictionary.meta.motto,
    keywords: dictionary.meta.fillKeywords([]),
    openGraph: {
      title: dictionary.meta.websiteName,
      description: dictionary.meta.motto,
      siteName: dictionary.meta.websiteName,
    },
    twitter: {
      title: dictionary.meta.websiteName,
      description: dictionary.meta.motto,
      site: "@noobnooc",
      card: "summary_large_image",
    },
    alternates: {
      languages: Object.fromEntries(langEntries),
    },
  };
}

const bottomNavItems = [
  {
    name: "主观世界",
    link: "https://subnooc.com",
  },
  {
    name: "趣物",
    link: "https://quwu.io",
  },
  {
    name: "AssisChat",
    link: "https://assischat.com",
  },
  {
    name: "Lofyee",
    link: "https://lofyee.com",
  },
];

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="">
      <body className="bg-slate-50 text-black dark:bg-neutral-900 dark:text-slate-50">
        <header className="text-md h-20">
          <div className="h-40 w-full">
            <div className="sticky top-0 z-10 w-full bg-white/50  dark:bg-neutral-900">
              <div className="w-full bg-white/50 dark:bg-slate-100/5">
                <hr />
                <div className="mx-auto flex h-20 w-full max-w-screen-lg items-center justify-between gap-4 px-4 py-6">
                  <Link
                    className="flex items-center gap-4"
                    href={dictionary.urls.home}
                  >
                    <Image
                      className="h-8 w-8 rounded-lg"
                      src={avatar}
                      alt="Nooc Avatar"
                    />
                    <h1 className="font-bold opacity-80 sm:inline">
                      {dictionary.meta.websiteName}
                    </h1>
                  </Link>
                  <nav className="font-light">
                    <ul className="flex gap-4">
                      <li>
                        <Link href={dictionary.urls.home}>
                          {dictionary.labels.home}
                        </Link>
                      </li>
                      <li>
                        <Link href={dictionary.urls.works}>
                          {dictionary.labels.works}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="text-md bg-white/50 text-sm dark:bg-slate-100/5">
          <hr />
          <div className="mx-auto flex w-full max-w-screen-lg flex-col justify-between gap-4 px-4 py-10 sm:flex-row">
            <nav className="opacity-80">
              <ul className="flex gap-4">
                {bottomNavItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="opacity-60">© 2023 Nooc</p>
          </div>
          <hr />
        </footer>
      </body>
    </html>
  );
}
