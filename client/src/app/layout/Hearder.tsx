import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  themeChangeHandler: () => void;
}

export default function Header({ darkMode, themeChangeHandler }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Store</Typography>
        <Switch checked={darkMode} onChange={themeChangeHandler} />
      </Toolbar>
    </AppBar>
  );
}
