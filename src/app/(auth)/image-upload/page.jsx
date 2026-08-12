"use client";

import { useState } from "react";
import Title from "@/components/Title";
import Image from "next/image";

const ImageUpload = () => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="mx-auto max-w-md px-6 py-10">
      <Title>Upload Image</Title>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label
          htmlFor="image"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 p-8 text-center transition hover:border-green-600 hover:bg-slate-50"
        >
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              className="h-32 w-32 rounded-xl object-cover"
            />
          ) : (
            <>
              <span className="text-sm font-medium text-slate-700">
                Click to select an image
              </span>
              <span className="text-xs text-slate-500">
                PNG, JPG up to 5MB
              </span>
            </>
          )}
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {fileName && (
          <p className="truncate text-sm text-slate-600">{fileName}</p>
        )}

        <button
          type="button"
          disabled={!preview}
          className="rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
