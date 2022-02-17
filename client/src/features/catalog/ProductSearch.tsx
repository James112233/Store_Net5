import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";

export default function ProdcutSearch() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [searchTerm, setSerachTerm] = useState(productParams.searchTerm);
  const dispatch = useAppDispatch();

  const debounceSearch = debounce((event: any) => {
    dispatch(setProductParams({ searchTerm: event.target.value }));
  }, 1000);

  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={searchTerm || ""}
      onChange={(event: any) => {
        setSerachTerm(event.target.value);
        debounceSearch(event);
      }}
    />
  );
}
