"use client";

import { logout } from "@/actions/logout";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

function LogoutBtn() {
  const handelLogout = async () => {
    await logout();
  };
  return <DropdownMenuItem onClick={handelLogout}>Logout</DropdownMenuItem>;
}

export default LogoutBtn;
