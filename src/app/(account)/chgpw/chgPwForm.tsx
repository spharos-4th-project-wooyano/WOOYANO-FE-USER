"use client";
import Button from "@/shared/Button";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import React, { ChangeEvent, useEffect, useState } from "react";

interface findPwCertform {
  name: string;
  email: string;
  certNumber: string;
}

export default function ChgPwForm() {
  const [findPwCertForm, setFindPwCertForm] = useState<findPwCertform>({
    name: "",
    email: "",
    certNumber: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    setFindPwCertForm({
      ...findPwCertForm,
      [id]: value,
    });
    console.log(findPwCertForm);
  };

  return (
    <div>
      name
    </div>
  );
}