import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
    value: string;
    onChangeLimit: (value: string) => void;
};

const PerPage = (props: Props) => {
  const { value, onChangeLimit } = props;
  return (
    <Select onValueChange={onChangeLimit} value={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Limit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="50">50</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PerPage;
