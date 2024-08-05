"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import TopBar from "@/components/editor/top-bar";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  t?: string;
}

import { render } from "react-dom";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

interface IProps {
  jsonDesign?: any; // JSON data type of this json will be written
}

const Editor: React.FC<IProps> = (props) => {
  const searchParams = useSearchParams();
  const t = searchParams.get("t");

  const emailEditorRef = useRef<EditorRef>(null);
  const [projectName, setProjectName] = useState<string>("Untitled project");

  const exportDesign = (extension: "html" | "json") => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const fileName = projectName.replace(/\s+/g, "_").toLowerCase();
      const { design, html } = data;
      const blob = new Blob(
        [extension === "html" ? html : JSON.stringify(design, null, 2)],
        { type: "text/html" }
      );
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download =
        extension === "html" ? fileName + ".html" : fileName + ".json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  };

  const editProjectName = (newName: string): void => {
    setProjectName(newName);
  };

  const onReady: EmailEditorProps["onReady"] = async (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);

    if (t) {
      try {
        const response = await fetch(t);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        unlayer.loadDesign(jsonData);
      } catch (err) {
        console.log("Error tryning to fetch template");
      }
    }
  };

  return (
    <main className="flex flex-col h-screen">
      <TopBar
        projectName={projectName}
        editProjectName={editProjectName}
        exportHtml={() => exportDesign("html")}
        exportJson={() => exportDesign("json")}
      />
      <div className="flex-1">
        <div className="w-full h-full">
          <EmailEditor
            ref={emailEditorRef}
            onReady={onReady}
            minHeight={"100%"}
          />
        </div>
      </div>
    </main>
  );
};

export default Editor;
