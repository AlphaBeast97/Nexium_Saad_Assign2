"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function SummaryToastClientWrapper() {
  useEffect(() => {
    toast.dismiss();
    toast.success("Summary generated!");
  }, []);

  return null;
}
