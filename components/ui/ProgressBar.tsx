'use client'
import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ccc;
  border-radius: 8px;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #007bff;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

interface ProgressBarProps {
  total: number; // 총 작업 수
  completed: number; // 완료된 작업 수
}

function ProgressBar({ total, completed }: ProgressBarProps) {
    const progress = (completed / total) * 100;
  
    return (
      <ProgressBarContainer>
        <Progress progress={progress}></Progress>
      </ProgressBarContainer>
    );
  }
  
  export default ProgressBar;