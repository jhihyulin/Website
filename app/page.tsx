"use client";

import React from "react";
import { Button, CardBody } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { Modal } from "@nextui-org/react";
import { ModalContent } from "@nextui-org/react";
import { ModalHeader } from "@nextui-org/react";
import { ModalBody } from "@nextui-org/react";
import { ModalFooter } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa6";
import { SiBitcoin } from "react-icons/si";
import { SiEthereum } from "react-icons/si";
import { SiSolana } from "react-icons/si";
import { SiTon } from "react-icons/si";
import { SiSui } from "react-icons/si";

import { CustomSnippet } from "../components/custom-snippet";

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

const cryptoAddress = [
  {
    symbol: <SiBitcoin />,
    name: "Taproot",
    address: "bc1pse2ks9enzy24gujs29p0xy7rskct2snxm33vkpqg47m59syrcfvqwzpy0c",
  },
  {
    symbol: <SiEthereum />,
    name: "EVM",
    address: "0x52fd70e3ee2f822815967bcd044c6015a3b0fefb",
  },
  {
    symbol: <SiSolana />,
    name: "Solana",
    address: "3ZmCBQeue15WzWm6bbt7fTbMMeeuN9f3haQ1rChZyajy",
  },
  {
    symbol: <SiTon />,
    name: "The Open Network",
    address: "UQCBOkBR63ss7jSmcSo-Bwpkkj-ffLpKsox2IAcr9L3XbPOy",
  },
  {
    symbol: <SiSui />,
    name: "Sui Network",
    address:
      "0x5d8faa2abe5fe6cfdc76d67c6993812236b35c7d493e1e266bf911e3b357fc21",
  },
];

export default function Home() {
  const {
    isOpen: isEmailOpen,
    onOpen: onEmailOpen,
    onOpenChange: onEmailOpenChange,
  } = useDisclosure();
  const {
    isOpen: isCryptoOpen,
    onOpen: onCryptoOpen,
    onOpenChange: onCryptoOpenChange,
  } = useDisclosure();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="row-start-2">
        <Card>
          <CardBody className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
            <div className="flex flex-col gap-4 items-center sm:flex-row sm:items-start">
              <Avatar
                isBordered
                radius="sm"
                size="lg"
                src="/images/avatar.jpg"
              />
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
                  onPress={() => {
                    window.open(item.link, "_self");
                  }}
                />
              ))}
              <Button
                isIconOnly
                startContent={<FaEnvelope size={24} />}
                onPress={onEmailOpen}
              />
              <Modal
                isOpen={isEmailOpen}
                onOpenChange={onEmailOpenChange}
                backdrop="blur"
                hideCloseButton
              >
                <ModalContent>
                  <ModalHeader className="flex flex-col gap-1">
                    Email
                  </ModalHeader>
                  <ModalBody>
                    <CustomSnippet hideSymbol size="lg">
                      jy@saget.me
                    </CustomSnippet>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onEmailOpenChange}
                    >
                      Close
                    </Button>
                    <Button
                      startContent={<FaArrowRight />}
                      onPress={() => {
                        window.open("mailto:jy@saget.me", "_self");
                      }}
                    >
                      Send Email
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                isIconOnly
                startContent={<FaBtc size={24} />}
                onPress={onCryptoOpen}
              />
              <Modal
                isOpen={isCryptoOpen}
                onOpenChange={onCryptoOpenChange}
                backdrop="blur"
                hideCloseButton
              >
                <ModalContent>
                  <ModalHeader className="flex flex-col gap-1">
                    Crypto Addresses
                  </ModalHeader>
                  <ModalBody>
                    {cryptoAddress.map((item, index) => (
                      <div key={index} className="w-full flex flex-col">
                        <p className="font-bold">{item.name}</p>
                        <CustomSnippet
                          symbol={
                            <div className="flex items-center">
                              {item.symbol}
                              &nbsp;
                            </div>
                          }
                          size="lg"
                        >
                          {item.address}
                        </CustomSnippet>
                      </div>
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onCryptoOpenChange}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </main>
    </div>
  );
}
