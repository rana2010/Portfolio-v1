"use client";

import { useEffect, useState } from "react";

const isDev = process.env.NODE_ENV === "development";

export function DevTextEditor() {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!isDev) return;

    const elements = document.querySelectorAll("h1, h2, h3, p, span, a, li");

    elements.forEach((el, index) => {
      const htmlEl = el as HTMLElement;
      // Skip the editor button itself and nothing outside text nodes
      if (htmlEl.closest("[data-dev-editor]")) return;
      if (htmlEl.querySelector("h1, h2, h3, p, a, li, button, input, svg")) {
        return;
      }

      const key = `dev-edit-${window.location.pathname}-${index}`;
      const saved = localStorage.getItem(key);
      if (saved && !editing) {
        htmlEl.innerText = saved;
      }

      if (editing) {
        htmlEl.contentEditable = "true";
        htmlEl.spellcheck = false;
        htmlEl.style.outline = "1px dashed rgba(99, 102, 241, 0.5)";
        htmlEl.style.cursor = "text";
        htmlEl.onblur = () => localStorage.setItem(key, htmlEl.innerText);
      } else {
        htmlEl.contentEditable = "false";
        htmlEl.spellcheck = true;
        htmlEl.style.outline = "";
        htmlEl.style.cursor = "";
        htmlEl.onblur = null;
      }
    });
  }, [editing]);

  if (!isDev) return null;

  const resetEdits = () => {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(`dev-edit-${window.location.pathname}`))
      .forEach((k) => localStorage.removeItem(k));
    window.location.reload();
  };

  return (
    <div
      data-dev-editor
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-800 shadow-lg backdrop-blur"
    >
      <button
        type="button"
        onClick={() => setEditing((value) => !value)}
        className={`rounded-full px-2.5 py-1 transition ${
          editing
            ? "bg-indigo-600 text-white"
            : "bg-neutral-100 hover:bg-neutral-200"
        }`}
      >
        {editing ? "Done Editing" : "Edit Text"}
      </button>
      {editing && (
        <button
          type="button"
          onClick={resetEdits}
          className="text-neutral-500 hover:text-red-600"
          title="Revert to original code text"
        >
          Reset
        </button>
      )}
    </div>
  );
}
