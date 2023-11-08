import { StepperNumberType } from "@/types/StepperNumberType";

export function StepperNumber({
  stepId,
  StepperNumberData,
}: {
  stepId: number;
  StepperNumberData: StepperNumberType[];
}) {
  return (
    <div className="flex gap-3 py-10 justify-center">
      {StepperNumberData.map((e: StepperNumberType, index) => (
        <div key={e.id}>
          <div className={`text-center font-bold ${index < stepId ? 'text-green-500' : 'text-gray-400'}`}>
            {e.title}
          </div>
          {index < StepperNumberData.length - 1 && (
            <div className={`h-1 w-12 bg-${index < stepId ? 'green' : 'gray'}-500 mx-auto`}></div>
          )}
        </div>
      ))}
    </div>
  );
}