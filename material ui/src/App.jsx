import { useState } from "react";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-3xl flex flex-col items-center">
      <Typography variant="h5">Welcome to react and materail ui</Typography>
      <Button variant="text" onClick={() => setCount((prev) => prev + 1)}>
        Click me
      </Button>
      <Badge badgeContent={count} color="primary" className="cursor-pointer">
        <MailIcon color="action" />
      </Badge>
    </div>
  );
};

export default App;
