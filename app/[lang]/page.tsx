import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SiGithub, SiTwitter } from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";
import Card from "../../components/card";
import ProfileCard from "../../components/profile-card";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import subnooc from "../../public/subnooc.png";
import { shuffleArray } from "../../lib/array";
import { getDictionary } from "../../dictionaries";

export const runtime = "edge";

function Title({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h1 className={twMerge("text-base font-bold sm:text-lg", className)}>
      {children}
    </h1>
  );
}

function Subtitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2 className={twMerge("text-sm opacity-60 sm:text-base", className)}>
      {children}
    </h2>
  );
}

function Label({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2 className={twMerge("text-sm font-bold opacity-60", className)}>
      {children}
    </h2>
  );
}

export default async function Home({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="mx-auto flex w-full max-w-screen-lg flex-col gap-4 px-4 py-10">
      <div className="grid relative grid-cols-1 sm:gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4 sm:sticky sm:top-10">
          <ProfileCard
            className="bottom-0 aspect-auto sm:aspect-square"
            motto={dictionary.meta.motto}
            bio={dictionary.meta.bio}
          />
          <Label className="col-span-2 mt-4">
            {dictionary.labels.contactMe}
          </Label>
          <div className="grid grid-cols-2 gap-4">
            {dictionary.contacts.map((contact) => (
              <Card
                key={contact.name}
                className="flex justify-between bg-white/50 dark:bg-indigo-100/5"
                link={contact.link}
              >
                <div className="flex flex-col">
                  <Title className="">{contact.label}</Title>
                  <Subtitle>{contact.name}</Subtitle>
                </div>
                <contact.icon className="self-center h-6 w-6 sm:h-10 sm:w-10 opacity-50" />
              </Card>
            ))}
          </div>
        </div>
        <Label className="col-span-2 mt-8 mb-4 sm:hidden">
          {dictionary.labels.doing}
        </Label>
        <div className="grid grid-cols-2 gap-4 self-start">
          {dictionary.works
            .filter((work) => work.primary)
            .map((work) => (
              <Card
                key={work.name}
                className={twMerge(
                  "relative flex aspect-square flex-col gap-2 sm:gap-4",
                  `bg-${work.color}-300/10 dark:bg-${work.color}-400/10`,
                )}
                link={work.link}
              >
                <div className="flex gap-2 sm:gap-4">
                  <Image
                    className="h-10 w-10 sm:h-20 sm:w-20 rounded-lg"
                    src={work.image!}
                    alt={dictionary.labels.icon(work.name)}
                  />
                  <div className="flex flex-col">
                    <Title className="text-md">{work.name}</Title>
                    <div className="opacity-50 text-xs sm:text-sm">
                      {new URL(work.link).host}
                    </div>
                  </div>
                </div>
                <Subtitle className="">{work.summary}</Subtitle>
              </Card>
            ))}

          <Label className="col-span-2 mt-4">{dictionary.labels.writing}</Label>
          <Card
            className="flex aspect-square flex-col bg-red-300/10 dark:bg-red-400/10"
            link="https://subnooc.com"
          >
            <Image
              className="mb-auto h-12 w-12 self-end rounded-lg border sm:h-16 sm:w-16"
              alt="Subnooc Icon"
              width="256"
              height={256}
              src={subnooc}
            />
            <Subtitle>subnooc.com</Subtitle>
            <Title className="text-red-500">主观世界</Title>
          </Card>
          <Card
            className="flex aspect-square flex-col bg-neutral-300/10 dark:bg-neutral-400/10"
            link="https://github.com/noobnooc/noobnooc/discussions"
          >
            <SiGithub className="mb-auto box-border h-12 w-12 self-end rounded-lg border bg-black p-2 text-white sm:h-16 sm:w-16" />
            <Subtitle>github.com</Subtitle>
            <Title className="">技术分享</Title>
          </Card>
        </div>
      </div>

      <Label className="mt-4">{dictionary.labels.playing}</Label>
      <div className="grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-3">
        {dictionary.playingItems.map((playingItem) => (
          <Card
            key={playingItem.name}
            className={twMerge(
              "flex aspect-square flex-col sm:aspect-video",
              `bg-${playingItem.color}-300/10 dark:bg-${playingItem.color}-400/10`,
            )}
          >
            <Title className={`text-${playingItem.color}-500`}>
              {playingItem.name}
            </Title>
            <Subtitle className="mb-5">{playingItem.summary}</Subtitle>
            <playingItem.icon
              className={twMerge(
                "mt-auto h-10 w-10 self-end",
                `text-${playingItem.color}-500`,
              )}
            />
          </Card>
        ))}
      </div>

      <Label className="mt-4">{dictionary.labels.friends}</Label>
      <div className="grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-3">
        {shuffleArray(dictionary.friendComments)
          .slice(0, 6)
          .map((comment) => (
            <Card
              key={comment.name}
              className={twMerge(
                "flex aspect-square flex-col justify-between sm:aspect-video",
                `bg-${comment.color}-300/10 dark:bg-${comment.color}-400/10`,
              )}
              link={comment.link}
            >
              <div className="flex justify-between gap-2">
                <Title className={`text-${comment.color}-500`}>
                  {comment.name}
                </Title>
                <Image
                  className="h-8 w-8 rounded-full sm:h-12 sm:w-12"
                  src={comment.avatar}
                  alt={comment.name}
                />
              </div>
              <Subtitle className="mt-4 text-sm">{comment.comment}</Subtitle>
            </Card>
          ))}
      </div>
    </main>
  );
}
