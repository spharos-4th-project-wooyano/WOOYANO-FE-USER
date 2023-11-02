"use client";
import React from "react";

interface ProgressBarProps {
  total: number; // 총 작업 수
  completed: number; // 완료된 작업 수
}

export default function ProgressBar({ total, completed }: ProgressBarProps) {
  const progress = (completed / total) * 100;
  // const isCompleted = progress > 0;

  return (
    <div className="w-full h-1.5 mb-4 dark:bg-gray-700 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-400 dark:bg-cyan-400 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );
}