// @ts-nocheck
"use client";

import React from "react";

export default function Banner({ value }) {
  return (
    <div
      className={`mt-8 p-4 text-2xl font-semibold text-white rounded-lg ${
        value >= 0 ? "bg-green-400" : "bg-red-400"
      }`}
    >
      value is {value >= 0 ? "positive" : "Neg"}
    </div>
  );
}
