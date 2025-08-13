"use server";

import { db } from "@/app/db";
import { OrderStatus } from "@/lib/generated/prisma";

export const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  await db.order.update({
    where: { id },
    data: { status: newStatus },
  });
};
