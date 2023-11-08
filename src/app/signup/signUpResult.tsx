import Label from "@/components/Label";
import Input from "@/shared/Input";
import React from "react";
import { SignUpType } from "@/types/SignUpType";

export default function SignUpResult(props: {signUpData: SignUpType, setSignUpData: React.Dispatch<React.SetStateAction<SignUpType>>}) {
  const { signUpData } = props;

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex-grow mt-2 md:mt-0 p-4 md:p-0 max-w-3xl space-y-6">
          <div className="flex flex-col font-semibold gap-3">
            <h2 className="text-3xl">회원가입 완료</h2>
            <div>
              <p className="text-xl">Welcome to Wooyano!</p>
              <p className="text-xl pt-4">
                아래의 정보로 회원가입이 완료되었습니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex gap-6">
              <div>
                <Label>Name</Label>
                <Input
                  className="mt-1.5"
                  value={`${signUpData.username}`}
                  readOnly
                />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input
                  className="mt-1.5 "
                  defaultValue={`${signUpData.phone}`}
                  readOnly
                />
              </div>
            </div>
            <div>
              <Label>Email</Label>
              <Input
                className="mt-1.5 "
                defaultValue={`${signUpData.email}`}
                readOnly
              />
            </div>
            <div>
              <Label>Address</Label>
              <Input
                className="mt-1.5 "
                defaultValue={`${signUpData.localAddress}`}
                readOnly
              />
              <Input
                className="mt-1.5 "
                defaultValue={`${signUpData.extraAddress}`}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
