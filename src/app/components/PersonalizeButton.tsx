"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Copy, Check } from "lucide-react";

const PersonalizeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [personName, setPersonName] = useState("");
  const [copied, setCopied] = useState(false);

  // Get the current domain - in production, replace with your actual domain
  const domain = "https://bemybee.imtiazraqib.com";

  const generateLink = () => {
    if (!personName) return "";
    return `${domain}?name=${encodeURIComponent(personName)}`;
  };

  const handleCopy = async () => {
    const link = generateLink();
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-800 transition-colors">
        Personalize your card
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Personalize Your Valentine Card ❤️</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 p-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Recipient Name
              </label>
              <Input
                id="name"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder="Enter their name"
                className="w-full"
              />
            </div>

            {personName && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Your Personalized Link:</p>
                <div className="flex items-center gap-2">
                  <div className="p-3 bg-gray-100 rounded-md break-all flex-1">
                    <code className="text-xs">{generateLink()}</code>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-pink-200 rounded-md transition-colors"
                    title="Copy to clipboard">
                    {copied ? <Check className="w-5 h-5 text-pink-600" /> : <Copy className="w-5 h-5 text-pink-600" />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PersonalizeButton;
