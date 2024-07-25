'use client'
import React, { useRef } from 'react';
import TopBar from '@/components/editor/top-bar'
import EditorContainer from '@/components/editor/editor-container'


import { render } from 'react-dom';

import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';

const Editor = () => {
    const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'download.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };
  return (
    <main className='flex flex-col h-screen'>
        <TopBar exportHtml={exportHtml}/>
        <div className='flex-1'>
            <div className="w-full h-full">
                <EmailEditor ref={emailEditorRef} onReady={onReady} minHeight={"100%"} />
            </div>
        </div>
    </main>
  )
}

export default Editor