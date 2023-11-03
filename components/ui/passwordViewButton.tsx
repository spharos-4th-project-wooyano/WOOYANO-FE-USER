import React from "react";

interface PasswordViewButtonProps {
  pwType: boolean;
  onClick: () => void;
}

export default function PasswordViewButton({ onClick, pwType }: PasswordViewButtonProps) {
    return (
    <button type="button" onClick={onClick} className="h-[20px] w-[20px]">
      <div>
        {pwType ? (
          <img src="/icon/pwview/hide.png" alt="Hide Password" className="dark:invert"/>
        ) : (
          <img src="/icon/pwview/view.png" alt="Show Password" className="dark:invert"/>
        )}
      </div>
    </button>
  );
}
