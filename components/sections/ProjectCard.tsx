"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Modal from "@/components/ui/Modal";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const imageSrc = project.image ?? "/projects/placeholder.svg";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`text-left rounded-2xl border overflow-hidden h-full w-full cursor-pointer transition hover:-translate-y-1 duration-300 ${
          project.dark
            ? "bg-[#1C1410] text-[#FAF7F2]"
            : "bg-[#EDE8DF] border-[#C8BAA6]"
        }`}
      >
        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-instrument">
            {project.title}
          </h3>

          <p className="text-sm opacity-80">
            {project.desc}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`text-xs px-3 py-1 rounded-full border ${
                  project.dark
                    ? "border-[#FAF7F2]/30"
                    : "border-[#C8BAA6]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <span className="group inline-flex items-center gap-2 text-sm pt-2">
            View project
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div className="space-y-4">
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl leading-snug pr-8">{project.title}</h3>

            <p className="text-sm leading-relaxed opacity-80">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-[#C8BAA6]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1410] text-[#FAF7F2] text-sm hover:opacity-90 transition"
                >
                  <SiGithub size={16} />
                  GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8BAA6] text-sm hover:bg-[#EDE8DF]/70 transition"
                >
                  <ExternalLink size={16} />
                  Live Project
                </a>
              )}

              {project.docsUrl && (
                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8BAA6] text-sm hover:bg-[#EDE8DF]/70 transition"
                >
                  <FileText size={16} />
                  Documentation
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
