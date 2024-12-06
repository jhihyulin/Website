"use client";

import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { Modal } from "@nextui-org/react";
import { ModalContent } from "@nextui-org/react";
import { ModalHeader } from "@nextui-org/react";
import { ModalBody } from "@nextui-org/react";
import { ModalFooter } from "@nextui-org/react";
import { Avatar } from "@nextui-org/avatar";
import { Snippet } from "@nextui-org/snippet";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import React from "react";

const LocationLinks = [
  {
    name: "Taiwan",
    link: "https://www.google.com/maps/search/?api=1&query=taiwan",
    icon: <FaLocationDot />,
    className: "bg-gradient-to-br from-[#000095] to-[#FE0000] text-white",
  },
  {
    name: "NDHU",
    link: "https://www.ndhu.edu.tw/",
    icon: <FaUniversity />,
    className:
      "bg-gradient-to-br from-[#0B4A2A] via-[#3A6B12] to-[#76610F] text-white",
  },
];

const mediaLinks = [
  {
    link: "https://github.com/jhihyulin",
    icon: <FaGithub size={24} />,
  },
  {
    link: "https://www.instagram.com/jhih_yu_lin",
    icon: <FaInstagram size={24} />,
  },
  {
    link: "https://discordapp.com/users/561051528065187862",
    icon: <FaDiscord size={24} />,
  },
  {
    link: "https://t.me/jhihyulin",
    icon: <FaTelegram size={24} />,
  },
];

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center sm:flex-row">
          <Avatar isBordered radius="sm" size="lg" src="/images/avatar.jpg" />
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <div className="flex flex-col gap-2 items-center sm:flex-row sm:items-end">
              <p className="text-2xl font-bold" translate="no">
                jhihyu
              </p>
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <p className="text-md text-gray-500" translate="no">
                  hack-a-pizza
                </p>
                <p className="text-md text-gray-500">/</p>
                <p className="text-md text-gray-500" translate="no">
                  saget
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <p className="text-lg text-gray-500">Hobbyist Developer</p>
              <p className="text-lg text-gray-500">/</p>
              <p className="text-lg text-gray-500">Physics Student</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {LocationLinks.map((item, index) => (
            <Button
              key={index}
              startContent={item.icon}
              radius="full"
              className={`${item.className} shadow-lg font-bold`}
              onPress={() => {
                window.open(item.link, "_self");
              }}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {mediaLinks.map((item, index) => (
            <Button
              isIconOnly
              key={index}
              startContent={item.icon}
              radius="full"
              variant="faded"
              onPress={() => {
                window.open(item.link, "_self");
              }}
            />
          ))}
          <Button
            isIconOnly
            startContent={<FaEnvelope size={24} />}
            radius="full"
            variant="faded"
            onPress={onOpen}
          />
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            classNames={{
              base: `${
                typeof window !== "undefined" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : ""
              }`,
            }}
          >
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">Email</ModalHeader>
              <ModalBody>
                <Snippet hideSymbol size="lg">
                  jy@saget.me
                </Snippet>
              </ModalBody>
              <ModalFooter>
                <Button
                  startContent={<FaArrowRight />}
                  radius="full"
                  variant="faded"
                  onPress={() => {
                    window.open("mailto:jy@saget.me", "_self");
                  }}
                >
                  Send Email
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </main>
    </div>
  );
}
