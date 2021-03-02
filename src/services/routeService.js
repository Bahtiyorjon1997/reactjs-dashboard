import BsTable from "../routes/bs-table";
import Email from "../routes/email";
import Calendar from "../routes/calendar/calendar";
import Chat from "../routes/chat/chat";

export default [
  { path: "email", component: Email },
  { path: "table", component: BsTable },
  { path: "chat", component: Chat },
  { path: "calendar", component: Calendar },
];
