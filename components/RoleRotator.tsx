"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % profile.roles.length);
        setVisible(true);
      }, 260);
    }, 3200);
    return () => clearInterval(cycle);
  }, []);

  return (
    <span
      className={`transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {profile.roles[index]}
    </span>
  );
}
