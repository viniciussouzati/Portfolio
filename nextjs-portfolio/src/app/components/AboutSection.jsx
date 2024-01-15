"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Python</li>
        <li>React</li>
        <li>Vue</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Formação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ciência da Computação, IBMR (cursando)</li>
        <li>Ciência de Dados com Python, DIO</li>
        <li>Formação Node.JS e Vue</li>
      </ul>
    ),
  },
  {
    title: "Certificações",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner, Senac RJ (em andamento)</li>
        <li>Ciência de Dados com Python, DIO</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={450} height={450} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
          Sou um desenvolvedor web full stack apaixonado por criar
            aplicações web interativas e responsivas. Possuo tenho experiencia
            em projetos pessoais com React, Vue, Node.js, Python, MySQL,
            HTML, CSS e Git. Eu aprendo rápido e estou sempre
            buscando expandir meu conhecimento e conjunto de habilidades. Trabalho muito bem em equipe, pensamento analítico, e
            estou animado para trabalhar com outras pessoas para criar aplicativos incríveis.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificações{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
