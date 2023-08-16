import generateMonths from "@/utils/generateMonths";
import generateYears from "@/utils/generateYears";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React from "react";

interface AddCard {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddCard({ setVisible }: AddCard) {
  return (
    <div className="space-y-2 w-full">
      <div className="flex flex-col gap-2 ">
        <label htmlFor="card" className="text-gray-50 font-semibold text-sm">
          Card Holder Name
        </label>
        <InputText id="card" className="rounded-full" />
      </div>

      <div className="flex flex-col gap-2 ">
        <label htmlFor="card" className="text-gray-50 font-semibold text-sm">
          Card Number
        </label>
        <InputText
          id="card"
          type="digit"
          className="rounded-full"
          keyfilter="int"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-50 font-semibold text-sm">Expiration date</p>
          <p className="text-gray-50 font-semibold text-sm">CVV/CVC</p>
        </div>
        <div className="flex gap-6 items-center w-full">
          <Dropdown
            options={generateYears()}
            optionLabel="label"
            optionValue="value"
            placeholder="Select a year"
          />
          <Dropdown
            options={generateMonths()}
            optionLabel="label"
            optionValue="value"
            placeholder="Select a month"
          />
          <div className="self-end">
            <InputText
              className="rounded-full w-[5rem]"
              keyfilter="int"
              placeholder="000"
              maxLength={3}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full">
        <div className="flex justify-center w-full">
          <button className="w-full mt-8  text-white rounded-full bg-black shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-system-background-light-primary">
            Add Card
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button
            className="w-full mt-8  text-blackk rounded-full bg-white ring-black ring-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center "
            onClick={() => setVisible(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
